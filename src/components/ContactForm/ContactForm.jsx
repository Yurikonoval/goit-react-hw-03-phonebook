import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          <span className={s.namespan}>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className={s.input}
            placeholder="Enter name"
          />
        </label>
        <label className={s.label}>
          <span className={s.numberspan}>Number</span>
          <input
            type="text"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
