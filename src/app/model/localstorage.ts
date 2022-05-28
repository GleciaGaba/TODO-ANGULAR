import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class LocalStorage {

    private localStorage: any;

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;

    }

    public set(key: string, value: Item[]): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public get(key: string): any {
        return this.localStorage[key] ? JSON.parse(this.localStorage[key]) : false;
    }

    public remove(key: string): any {
        this.localStorage.removeItem(key);
    }
}