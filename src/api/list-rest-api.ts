import axios from 'axios';
import { IListItem } from '@/domain/list-item';

const baseUrl = 'https://taltech.akaver.com/api/v1/ListItems/';

export const httpClient = axios.create({
    baseURL: baseUrl
});

// crud
// getListItems
export const getListItems = async (apiKey: string): Promise<IListItem[] | undefined> => {
    try {
        const response = await httpClient.get('?apiKey=' + apiKey);

        if (response.status === 200) {
            return response.data as IListItem[];
        }
    } catch (e) {
        console.log('Problem in get', e);
    }
};

// getListItem
export const getListItem = async (id: number, apiKey: string): Promise<IListItem | undefined> => {
    try {
        const response = await httpClient.get(id.toString() + '?apiKey=' + apiKey);

        if (response.status === 200) {
            return response.data as IListItem;
        }
    } catch (e) {
        console.log('Problem in get', e);
    }
};

// putListItem
export const putListItem = async (listItem: IListItem, apiKey: string): Promise<number | undefined> => {
    try {
        const response = await httpClient.put(listItem.id.toString() + '?apiKey=' + apiKey, listItem);
        return response.status;
    } catch (e) {
        console.log('Problem in create', e);
    }
};

// deleteListItem
export const deleteListItem = async (id: number, apiKey: string): Promise<number | undefined> => {
    try {
        const response = await httpClient.delete(id.toString() + '?apiKey=' + apiKey);
        return response.status;
    } catch (e) {
        console.log('Problem in delete', e);
    }
};

// postListItem
export const createListItem = async (description: string, completed: boolean, apiKey: string): Promise<number | undefined> => {
    try {
        const response = await httpClient.post('?apiKey=' + apiKey, {
            description,
            completed
        });
        return response.status;
    } catch (e) {
        console.log('Problem in create', e);
    }
};
