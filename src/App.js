import React from 'react';
import students from './components/students.json';

//import Clock from './components/Clock.jsx';
import EventHandle from './components/EventHandle.jsx';
import Form from './components/Form.jsx';
import ConditionalRender from './components/Conditional_Render.jsx';
import TemperatureConverter from './components/TemperatureConverter.jsx';
import Composition from './components/Composition.jsx';
import HigherOrderComponent from './components/HigherOrderComponent.jsx';

function App() {

return (
    <div>
        <body>
        <HigherOrderComponent />
        <Composition />
        <TemperatureConverter />
        <Form />
        <EventHandle />
        <ConditionalRender students={students}/>
        </body>
    </div>
);
}

export default App;