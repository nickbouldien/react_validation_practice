
import EventEmitter from 'events';
import dispatcher from '../dispatchers/Dispatcher'

class RegistrationStore extends EventEmitter{
  constructor(){
    super()
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  getFields(){
    return this.fields
  }


handleAction(action){
  switch(action.type){
    case('FIELD_SET'):{
      this.setField(action.index, action.value)
      break
    }
  }
}

setField(fieldName, value){
  this.fields[fieldName] = value
  this.emit('change')
}
}

const store = new RegistrationStore()

dispatcher.register(store.handleAction.bind(this))
export default store

///
