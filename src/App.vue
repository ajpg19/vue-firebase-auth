<script setup>
import {ref, onMounted} from 'vue';

import {doc, getDoc, getDocs, collection, onSnapshot, addDoc, deleteDoc, updateDoc, query, orderBy, limit} from 'firebase/firestore'
import {db} from '@/firebase'

//Firebase ref
const todosCollectionRef = collection(db, 'todos')

//todos
const todos = ref([
  // {
  //   id: 'id1',
  //   content: 'todo1 for now',
  //   done: false
  // },
  // {
  //   id: 'id1',
  //   content: 'pues van a ser 2',
  //   done: true
  // }
])

//addTodo
const newTodoContent = ref('')
const addTodo = () => {
  // const newTodo = {
  //   id: uuidv4(),
  //   content: newTodoContent.value,
  //   done: false
  // }
  // todos.value.unshift(newTodo)

  addDoc(collection(db, 'todos'), {
    content: newTodoContent.value,
    done: false,
    date: Date.now()
  })
  //console.log("Document written with ID: ", docRef)
  newTodoContent.value = ''
}

//deleteTodo
const deleteTodo = id => {

  //todos.value = todos.value.filter(todo => todo.id !== id)
  deleteDoc(doc(todosCollectionRef, id))
}

//toggleTodo
const toggleDone = id => {
  const index = todos.value.findIndex(todo => todo.id === id)
  const todoRef = doc(todosCollectionRef, id);
  updateDoc(todoRef, {
    done: !todos.value[index].done
  });
}

//get todos from firestore
onMounted(async () => {

  // let firestoreTodos = []
  // const docSnap = await getDocs(collection(db, 'todos'))
  // docSnap.forEach((doc) => {
  //   // console.log(doc.id, " => ", doc.data())
  //   const todo = {
  //     id: doc.id,
  //     content : doc.data().content,
  //     done: doc.data().done
  //   }
  //   firestoreTodos.push(todo)
  // })

  onSnapshot(collection(db, 'todos'), (querySnapshot) => {
    const firestoreTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      firestoreTodos.push(todo)
    });
    todos.value = firestoreTodos
  });

})

</script>


<template>
  <div class="my-container">

    <div class="title has-text-centered">
      AJ todo test
    </div>

    <form
        @submit.prevent="addTodo"
    >
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
              v-model="newTodoContent"
              class="input"
              type="text"
              placeholder="Add a todo"
          >
        </p>
        <p class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </p>
      </div>

    </form>

    <div
        v-for="todo in todos"
        class="card"
    >
      <div
          class="card-content mb-5"
          :class="{ 'has-background-success-light' : todo.done }"
      >
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div
                class="column"
                :class="{ 'has-text-success' : todo.done }"
            >
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button

                  @click="toggleDone(todo.id)"
                  class="button"
                  :class="todo.done ? 'is-success' : 'is-light'"
              >
                &check;
              </button>
              <button
                  @click="deleteTodo(todo.id)"
                  class="button is-danger ml-2"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>


<style>
@import 'bulma/css/bulma.css';

.my-container {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;

}

.has-text-success {
  text-decoration: line-through;
}

</style>