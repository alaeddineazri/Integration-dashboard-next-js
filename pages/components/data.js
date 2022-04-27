const initialData = {
    tasks:{
        "task-1":{id:"1",content:"task-1"  },
        "task-2":{id:"2",content:"task-2" },
        "task-3":{id:"3",content:"task-3"  },
        "task-4":{id:"4",content:"task-4"  },
    },
    columns:{
        "column-1":{
            id:"column-1",
            title:"To do",
            taskIds:["task-1","task-2","task-3","task-4"]
        },
        "column-2":{
            id:"column-2",
            title:"In progress",
            taskIds:[]
        },
        "column-3":{
            id:"column-3",
            title:"Done",
            taskIds:[]
        }},
columnsOrder:["column-1"]


}

export default initialData;