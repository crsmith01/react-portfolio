// import `useState` with React so that we can utilize the hook
import React, { useState } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
            id: 1, 
            name: 'Cadmium',
            description: 'Crowd-sourced app for finding art events in the Richmond, VA area.',
            img: '../public/images/images-tinified/cadmium-screnshot.png',
            alt: 'Cadmium application screenshot',
            repo: 'https://github.com/johnsoncm/cadmium',
            deployedApp: 'https://ancient-lowlands-14789.herokuapp.com/'
        },
        {
            id: 2, 
            name: 'Password Generator',
            description: 'App to create a password with alphanumeric and special characters.',
            img: '../public/images/images-tinified/password-screenshot.png',
            alt: 'Screenshot of password generator application',
            repo: 'https://github.com/crsmith01/homework-3-password-generator',
            deployedApp: 'https://crsmith01.github.io/homework-3-password-generator/'
        },
        {
            id: 3, 
            name: 'Work Day Scheduler',
            description: 'Work day scheduling app with color-coded time slots and ability to save notes.',
            img: '../public/images/images-tinified/work-day-scheduler-screenshot.png',
            alt: 'Screenshot of deployed work day scheduler application',
            repo: 'https://github.com/crsmith01/homework5-day-planner',
            deployedApp: 'https://crsmith01.github.io/homework5-day-planner/'
        },
        {
            id: 4, 
            name: 'Employee Tracker',
            description: 'Content Management System to view and manage departments, roles, and employees of a company.',
            img: '../public/images/images-tinified/employee-tracker-welcome.png',
            alt: 'Screenshot of welcome page of employee tracker application',
            repo: 'https://github.com/crsmith01/hw11-employee-tracker',
            // need to show way of this having a deployed app?
            // deployedApp: 
        },
        {
            id: 5, 
            name: 'E-Commerce Back End',
            description: 'Back end for an e-commerce site',
            img: '../public/images/images-tinified/e-commerce-back-end.gif',
            alt: 'Gif animation of back end of e-commerce application',
            repo: 'https://github.com/crsmith01/hw12-e-commerce-back-end',
            // need to show way of this having a deployed app?
            // deployedApp: 
        },
        {
            id: 6, 
            name: 'Fitness Tracker',
            description: 'Application to allow users to view, create, and track daily workouts.',
            img: '../public/images/images-tinified/fitness-tracker-stats.png',
            alt: 'Screenshot of stats page of fitness tracker application',
            repo: 'https://github.com/crsmith01/fitness-tracker',
            deployedApp: 'https://protected-tundra-70136.herokuapp.com/'
        },
        {
            id: 7, 
            name: 'Progressive Budget',
            description: 'Updated an existign budget tracking application to allow for offline access and functionality. The user is able able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they can populate the total when brought back online. ',
            img: '../public/images/images-tinified/pwa-screenshot.png',
            alt: 'Screenshot of progressive budget application functionality',
            repo: 'https://github.com/crsmith01/progressive-budget',
            deployedApp: 'https://mighty-sierra-97786.herokuapp.com/'
        },

    ]);
};