<template>
  <h1>Create</h1>

  <h4>ListItem</h4>
  <hr />
  <div class="row">
    <div class="col-md-4">
      <form action="/ListItems/Create" method="post">
        <div
          class="text-danger validation-summary-valid"
        >
          <ul>
            <li style="display: none"></li>
          </ul>
        </div>
        <div class="form-group">
          <label class="control-label" for="Description">Description</label>
          <input
            class="form-control"
            type="text"
            id="Description"
            maxlength="255"
            name="Description"
            v-model="description"
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
              v-model="completed"
            />
            Completed
          </label>
        </div>
        <div class="form-group">
          <input type="submit" value="Create" class="btn btn-primary" @click.prevent="createClicked"/>
        </div>
      </form>
    </div>
  </div>

  <div>
    <a href="/ListItems">Back to List</a>
  </div>
</template>

<script lang="ts">
import { createListItem } from '@/api/list-rest-api';
import { apiKey } from '@/config';
import { Options, Vue } from 'vue-class-component';

const TAG = 'ListItemsCreate';

@Options({
    components: {}
})
export default class ListItemsCreate extends Vue {
    description = '';
    completed = false;

    async createClicked() {
        console.log(TAG, 'createClicked');
        await createListItem(this.description, this.completed, apiKey);
        this.$router.push('/listitems');
    }
}
</script>
