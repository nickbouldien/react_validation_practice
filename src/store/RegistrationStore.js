
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

  getErrors(){
    return this.errors
  }

  addError(){
    // copy here
  }

  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
  }

  validatePresence(fieldName){
     if(this.fields[fieldName] === ''){
       this.addError(fieldName, 'is Required')
     }
   }

   validateEmail(fieldName){
     const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
     if(!filter.test(this.fields[fieldName])){
       this.addError(fieldName, 'is not an email')
     }
   }

   addError(fieldName, message){
     this.errors[fieldName] = message
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

const registrationStore = new RegistrationStore()

dispatcher.register(registrationStore.handleAction.bind(this))
export default registrationStore

///
