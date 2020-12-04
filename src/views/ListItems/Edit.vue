<template>
  <h1>Edit</h1>

  <h4>ListItem</h4>
  <hr />
  <div class="row">
    <div class="col-md-4">
      <form action="/ListItems/Edit/223" method="post">
        <div
          class="text-danger validation-summary-valid"
        >
          <ul>
            <li style="display: none"></li>
          </ul>
        </div>
        <input
          type="hidden"
          id="Id"
          name="Id"
          v-model="listItem.id"
        />
        <div class="form-group">
          <label class="control-label" for="Description">Description</label>
          <input
            class="form-control"
            type="text"
            id="Description"
            maxlength="255"
            name="Description"
            v-model="listItem.description"
          />
          <span
            class="text-danger field-validation-valid"
          ></span>
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="checkbox"
              id="Completed"
              name="Completed"
              v-model="listItem.checked"
            />
            Completed
          </label>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click.prevent="saveClicked">Save</button>
        </div>
      </form>
    </div>
  </div>

  <div>
    <a href="/ListItems">Back to List</a>
  </div>
</template>

<script lang="ts">
import { getListItem, putListItem } from '@/api/list-rest-api';
import { apiKey } from '@/config';
import { IListItem } from '@/domain/list-item';
import { Options, Vue } from 'vue-class-component';

const TAG = 'ListItemsEdit';

@Options({
    components: {}
})
export default class ListItemsEdit extends Vue {
    listItem: IListItem = {
        id: 0,
        description: '',
        completed: false
    };

    async saveClicked() {
        const response = await putListItem(this.listItem, apiKey);
        console.log(TAG, 'saveClicked', response);
        this.$router.push('/listitems');
    }

    async loadData() {
        this.listItem = await getListItem(Number(this.$route.params.id), apiKey) ?? this.listItem;
        console.log(TAG, this.listItem);
    }

    async beforeMount() {
        console.log(TAG, 'beforeMount');
        // load your data from api here!
        await this.loadData();
    }
}
</script>
