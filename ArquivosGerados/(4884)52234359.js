    import { createStore } from 'redux'&#xD;&#xA;    import { persistStore, persistReducer } from 'redux-persist'&#xD;&#xA;    import storage from 'redux-persist/lib/storage'&#xD;&#xA;    import rootReducer from './reducers'&#xD;&#xA;    const persistConfig = {&#xD;&#xA;      key: 'mykey',&#xD;&#xA;      storage,&#xD;&#xA;    }&#xD;&#xA;    const persistedReducer = persistReducer(persistConfig, rootReducer)&#xD;&#xA;    const store = createStore(persistedReducer)&#xD;&#xA;    const persistedStore = persistStore(store)&#xD;&#xA;    export default store