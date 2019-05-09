import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = {
  firstContainer: {
    border: '1 solid #ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ddd',
    '& .mainHeader': {
      textAlign: 'center'
    }
  }
}

class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        id: 1,
        firstName: "Jacobo",
        secondName: "Rodicio",
        age: 30,
        job: "Software Developer",
        nationality: "Spanish"
      },
      numsArry: [1,2,3,4,5,6,7,8,9],
      arryObjectNums: [{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1},{value: 1}],
      arryOfarrys: [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13]],
      namesRepeated: ['Jacobo', 'Anna', 'Jacobo', 'Luis', 'Marta', 'Marta', 'Pedro'],
    };
  }

  reduceItemByKeys = (item, keys) => {
    let output =  Object.keys(item)
      .map(key => key)
      .reduce((acc, cv) => {
        if (!keys.includes(cv)) {
          return (acc += item[cv] + ' -> ');
        }
        return acc;
      }, '');
      output = output.substring(0, output.length - 3);
      return output;
  };

  reduceSimpleSum = nums => {
    return nums.reduce((acc, cv) => acc + cv, 0)
  };

  reduceObjectSum = obj => {
    return obj.reduce((acc, cv) => acc + cv.value, 0);
  }

  reduceFlatten = arryOfarrys => {
    return arryOfarrys.reduce((acc, cv) => [...acc, ...cv], []);
  }

  reduceCountingInstances = arry => {
    let repetitions =  arry.reduce((allNames, name) => {
      if(name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    console.log("Repetitions: ", repetitions)
    return repetitions;
  }

  render() {
    const { classes } = this.props;
    const selectedKeys = ["id", "nationality"];
    return (
      <div className={classes.firstContainer}>
        {/* dif . [] */}
        <h2 className="mainHeader">
          Example . access VS dinamic [""] access
        </h2>
        <div>
          <h3>
            Using . access, notice that we're not able to reach the same
            info
          </h3>
          {Object.keys(this.state.person).map(key => (
            <p>
              {key}: {this.state.person.key}
            </p>
          ))}
        </div>
        <div>
          <h3>Using dinamic access</h3>
          {Object.keys(this.state.person).map(key => (
            <p>
              {key}: {this.state.person[key]}
            </p>
          ))}
        </div>

        {/* reduce */}
        <div>
          <h2>Ejemplo de reducer info by selected keys</h2>
          <p>{this.reduceItemByKeys(this.state.person, selectedKeys)}</p>
          <p>Simple result sum: {this.reduceSimpleSum(this.state.numsArry)}</p>
          <p>Simple result arry of objects with values: {this.reduceObjectSum(this.state.arryObjectNums)}</p>
          <p>Flatten with reduce an arry of arrays: {this.reduceFlatten(this.state.arryOfarrys)}</p>
          <p>Counting instances in an array: </p>
          {Object.keys(this.reduceCountingInstances(this.state.namesRepeated)).map(key => <p>{key}: {this.reduceCountingInstances(this.state.namesRepeated)[key]}</p>)}
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Functions);