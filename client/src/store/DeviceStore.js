import {makeAutoObservable} from 'mobx'

export class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:'Tablets'},
            {id:2, name:'Smartphones'}
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'}
        ]
        this._devices = [
            {id:1,name:'Iphone 12 Pro', price:2500, rating:5, img: 'https://sr57.ru/wp-content/uploads/2020/10/30052913b.jpg'},
            {id:2,name:'Iphone 12 Pro', price:2500, rating:5, img: 'https://sr57.ru/wp-content/uploads/2020/10/30052913b.jpg'},
            {id:3,name:'Iphone 12 Pro', price:2500, rating:5, img: 'https://sr57.ru/wp-content/uploads/2020/10/30052913b.jpg'},
            {id:4,name:'Iphone 12 Pro', price:2500, rating:5, img: 'https://sr57.ru/wp-content/uploads/2020/10/30052913b.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types=types
    }
    setBrands(brands) {
        this._brands=brands
    }
    setDevices(devices) {
        this._devices=devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}