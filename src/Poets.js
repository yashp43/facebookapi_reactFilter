import React, { Component } from 'react'
import FilterResults from 'react-filter-search';
 
class FilterRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleSubmit = () => {
    console.log("form submitted");
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    console.log(value);
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <FilterResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <nbsp />
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.value}
            onChange={e => console.log(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FilterRes;