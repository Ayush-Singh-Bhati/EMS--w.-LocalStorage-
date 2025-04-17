   
   const employees = [
      {
        "id": "emp_1",
        "name": "Aarav Sharma",
        "email": "employee1@example.com",
        "password": "123",
        "role": "employee",
        "taskNumber": {
          "active": 2,
          "complete": 0,
          "newTask": 2,
          "failed": 0
        },
        "tasks": [
          {
            "active": true,
            "date": "2025-04-08",
            "complete": false,
            "priority": "High",
            "newTask": true,
            "failed": false,
            "taskTitle": "Design Landing Page",
            "taskDescription": "Create the main landing page for the new project.",
            "category": "Design"
          },
          {
            "active": true,
            "date": "2025-04-09",
            "complete": false,
            "priority": "Medium",
            "newTask": true,
            "failed": false,
            "taskTitle": "Create Style Guide",
            "taskDescription": "Develop a comprehensive style guide for the team.",
            "category": "Design"
          }
        ]
      },
      {
        "id": "emp_2",
        "name": "Priya Verma",
        "email": "employee2@example.com",
        "password": "123",
        "role": "employee",
        "taskNumber": {
          "active": 1,
          "complete": 1,
          "newTask": 1,
          "failed": 0
        },
        "tasks": [
          {
            "active": false,
            "date": "2025-04-07",
            "complete": true,
            "priority": "Medium",
            "newTask": false,
            "failed": false,
            "taskTitle": "Update Database Schema",
            "taskDescription": "Modify and update the user table schema.",
            "category": "Development"
          },
          {
            "active": true,
            "date": "2025-04-10",
            "complete": false,
            "priority": "High",
            "newTask": true,
            "failed": false,
            "taskTitle": "Implement Authentication",
            "taskDescription": "Set up secure authentication methods.",
            "category": "Development"
          }
        ]
      },
      {
        "id": "emp_3",
        "name": "Vivaan Iyer",
        "email": "employee3@example.com",
        "password": "123",
        "role": "employee",
        "taskNumber": {
          "active": 1,
          "complete": 1,
          "newTask": 2,
          "failed": 0
        },
        "tasks": [
          {
            "active": true,
            "date": "2025-04-09",
            "complete": true,
            "priority": "Low",
            "newTask": true,
            "failed": false,
            "taskTitle": "Test Payment Gateway",
            "taskDescription": "Run tests on the payment integration module.",
            "category": "QA"
          },
          {
            "active": false,
            "date": "2025-04-07",
            "complete": true,
            "priority": "Medium",
            "newTask": true,
            "failed": false,
            "taskTitle": "Prepare Test Cases",
            "taskDescription": "Prepare all necessary test cases.",
            "category": "QA"
          }
        ]
      },
      {
        "id": "emp_4",
        "name": "Ananya Reddy",
        "email": "employee4@example.com",
        "password": "123",
        "role": "employee",
        "taskNumber": {
          "active": 0,
          "complete": 2,
          "newTask": 0,
          "failed": 1
        },
        "tasks": [
          {
            "active": false,
            "date": "2025-04-06",
            "complete": true,
            "priority": "High",
            "newTask": false,
            "failed": true,
            "taskTitle": "Fix Login Bug",
            "taskDescription": "Resolve the login issue where users cannot authenticate.",
            "category": "Bugfix"
          },
          {
            "active": false,
            "date": "2025-04-08",
            "complete": true,
            "priority": "Low",
            "newTask": false,
            "failed": false,
            "taskTitle": "Optimize API Performance",
            "taskDescription": "Improve the response time of APIs.",
            "category": "Bugfix"
          }
        ]
      },
      {
        "id": "emp_5",
        "name": "Rohan Mehta",
        "email": "employee5@example.com",
        "password": "123",
        "role": "employee",
        "taskNumber": {
          "active": 2,
          "complete": 0,
          "newTask": 2,
          "failed": 0
        },
        "tasks": [
          {
            "active": true,
            "date": "2025-04-10",
            "complete": false,
            "priority": "Medium",
            "newTask": true,
            "failed": false,
            "taskTitle": "Write API Documentation",
            "taskDescription": "Draft documentation for the new APIs.",
            "category": "Documentation"
          },
          {
            "active": true,
            "date": "2025-04-11",
            "complete": false,
            "priority": "High",
            "newTask": true,
            "failed": false,
            "taskTitle": "Review API Documentation",
            "taskDescription": "Review and finalize the API documentation.",
            "category": "Documentation"
          }
        ]
      }
    ]

      const admin = [{
        "id": "admin_1",
        "email": "admin@example.com",
        "password": "123",
        "role" : "admin",
        "name" : "Ayush Singh"
      },
      {
        "id": "admin_2",
        "email": "admin2@example.com",
        "password": "123",
        "role" : "admin",
        "name" : "Admin 2"
      }
    ]

    export interface TaskType {
      active: boolean;
      date: string;
      complete: boolean;
      priority: string;
      assignTo: string;
      newTask: boolean;
      failed: boolean;
      taskTitle: string;
      taskDescription: string;
      category: string;
    }

    export  interface employeesType {
        id: string;
        email: string;
        password: string;
        name: string;
        role: string;
        taskNumber: {
          active: number;
          complete: number;
          newTask: number;
          failed: number;
        };
        tasks: TaskType[];
      }
     export interface adminType {
        id: string;
        email: string;
        password: string;
        role: string;
        name : string;
      };

    

      export const setData = () =>{
        localStorage.setItem("employees", JSON.stringify(employees))
        localStorage.setItem("admin", JSON.stringify(admin))
      }
    
      export const getData = () =>{
        const employeesData: employeesType[] = JSON.parse(localStorage.getItem("employees") || "[]");
        const adminData: adminType[] = JSON.parse(localStorage.getItem("admin") || "[]");
        // console.log(employeesData, adminData)
        return { employeesData, adminData };

      }  