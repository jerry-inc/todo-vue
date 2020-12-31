<template>
  <a-row type="flex" justify="center" align="top">
    <a-col :span="22" style="">
      <div class="todoApp">
        <div class="title">What do I need to do today?</div>
        <a-form :form="form" @submit="handleSubmit" :wrapper-col="{ span: 24 }">
          <a-form-item>
            <a-row :gutter="4">
              <a-col :span="20">
                <a-input
                  allow-clear
                  v-decorator="[
                    'todo',
                    {
                      rules: [
                        { required: true, message: 'Enter a Task for Today!' }
                      ]
                    }
                  ]"
                />
              </a-col>
              <a-col :span="4">
                <a-button type="primary" html-type="submit">
                  <a-icon type="plus" />
                </a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </a-form>

        <div v-if="todoList && todoList.length > 0">
          <div class="title">Today, you've got to do...</div>

          <a-list
            class="demo-loadmore-list"
            item-layout="horizontal"
            size="small"
            :data-source="todoList"
            :pagination="pagination"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a slot="actions" @click="deleteItem(item.id)">delete</a>
              <a-list-item-meta description="">
                <p slot="title">
                  {{ item.title }}
                </p>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
        <div v-else>
          <a-empty />
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { db } from '@/main';

export default {
  name: 'ToDo',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'toDoForm' }),
      currentPage: 1,
      todoList: [],
      pagination: {
        pageSize: 5,
        total: 1,
        size: 'small'
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          db.collection('todo-list')
            .add({
              title: values.todo,
              created_at: Date.now()
            })
            .then(response => {
              if (response) {
                _this.$message.success('Item added to list');
                _this.myTodo = '';
                _this.form.resetFields();
              }
            })
            .catch(error => {
              _this.$message.error('There was an error in saving item.');
              console.log(error);
            });
        }
      });
    },
    deleteItem(id) {
      let _this = this;
      if (id) {
        db.collection('todo-list')
          .doc(id)
          .delete()
          .then(function() {
            console.log('Document successfully deleted');
            _this.$message.success('Successfully deleted.');
          })
          .catch(function(error) {
            _this.$message.error('There was an error in deleting item.');
            console.error(error);
          });
      } else {
        _this.$message.error('There was an error in deleting item.');
        console.error('Invalid ID');
      }
    }
  },
  mounted() {},
  beforeCreate: function() {
    const _this = _this;
    this.$store
      .dispatch('getListFromServer')
      .then(() => {
        this.todoList = this.$store.getters.getList;
        this.pagination.total = this.todoList.length;
      })
      .catch(function(error) {
        _this.$message.error(
          'There was an error in Obtaining Data from Server'
        );
        console.error(error);
      });
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.todoApp {
  margin: 0 auto;
  min-height: 300px;
}

.title {
  font-weight: bold;
  padding: 10px 0;
}
</style>
