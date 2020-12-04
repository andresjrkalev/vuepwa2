<template>
  <h1>Index - ListItems</h1>

  <p>
    <router-link class="nav-link text-dark" to="/listitems/create">Create</router-link>
  </p>
  <table class="table">
    <thead>
    <tr v-for="listItem in listItems" :key="listItem.id">
        <th>Description</th>
        <th>Checked</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="listItem in listItems" :key="listItem.id">
        <td>{{ listItem.description }}</td>
        <td>
            <input type="checkbox" disabled="disabled" v-model="listItem.checked" />
        </td>
        <td>
            <router-link :to="{ name: 'listitemsEdit', params: { id: listItem.id } }">Edit</router-link>
        </td>
        <td>
            <a href="#" @click.prevent="deleteClicked(listItem.id)">Delete</a>
        </td>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IListItem } from '@/domain/list-item';
import { apiKey } from '@/config';
import { deleteListItem, getListItems } from '@/api/list-rest-api';

const TAG = 'ListItemsIndex';

@Options({
    components: {}
})
export default class ListItemsIndex extends Vue {
    listItems: IListItem[] = [];

    async deleteClicked(id: number) {
        console.log(TAG, 'deleteClicked', id);
        await deleteListItem(id, apiKey);
        await this.loadData();
    }

    async loadData() {
        this.listItems = await getListItems(apiKey) ?? [];
        console.log(TAG, this.listItems);
    }

    async beforeMount() {
        console.log(TAG, 'beforeMount');
        // load your data from api here!
        await this.loadData();
    }

    mounted() {
        console.log(TAG, 'mounted');
    }

    beforeUpdate() {
        console.log(TAG, 'beforeUpdate');
    }

    updated() {
        console.log(TAG, 'updated');
    }

    unmounted() {
        console.log(TAG, 'unmounted');
    }

    activated() {
        console.log(TAG, 'activated');
    }

    deactivated() {
        console.log(TAG, 'deactivated');
    }

    // use setup incomposition api

    beforeCreate() {
        console.log(TAG, 'beforeCreate');
    }
}
</script>
