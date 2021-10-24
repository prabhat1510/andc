/**
 *  make an element draggable by adding the “draggable” attribute
 *  make an area droppable by implementing the “dragover” event
 *  capture the drag data by implementing the “dragstart” event
 *  capture the drop by implementing the “drop” event
 *  implement the “drag” event that is fired as the element is being dragged
 *  store the intermediate data in the dataTransfer object
 */
import React, { Component } from 'react';
import './App.css';

class AppDragDropDemo extends React.Component {
    state = {
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"wip", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"},
            {name:"Java", category:"complete", bgcolor:"red"},
            {name:"Python", category:"wip", bgcolor:"yellow"},
            {name:"Bootstrap", category:"inprogress", bgcolor:"yellow"}
          ]
    }
    // Below handler or function will ensure that the element being dragged is stored in the event object
    // and is available for use when required.
    onDragStart = (ev, id) => {
        console.log('dragstart:',id +'-----'+ ev);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        //We want to disable the default dragover event
        //So we called preventDefault method or funtion from dragover event
        ev.preventDefault();
    }

    /**
     * Below function we grab the task being dragged by using getData method
     * on the event's dataTransfer object(i.e. ev)
     * We then create a new tasks array by using the filter method, and change 
     * the category of the task being dragged
     * @param {*} ev 
     * @param {*} cat 
     */
    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       //Below creating new task[] with updated category using filter() method of advance js
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks,
       });  
    }

    render() {
        var tasks = {
            wip: [],
            complete: [],
            inprogress:[]
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className="inprogress"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "inprogress")}}>
                    <span className="task-header">Inprogress</span>
                    {tasks.inprogress}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
}

export default AppDragDropDemo;