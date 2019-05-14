import React, { Component } from 'react';

class EventContainer extends Component {
    constructor(){
      super();
  
      this.state = {
        events: [],
        editEvent: {
          title: '',
          description: '',
          _id: ''
        },
        showEditModal: false
      }
    }
}

export default EventContainer;