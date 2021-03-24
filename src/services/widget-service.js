export const createWidgetForTopic = (topicId, widget) => {
    // TODO: move server communication to widget-service.js
    return fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteWidget = (wid) => {
    return fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE",
    }).then(response => response.json())
}

export const updateWidget = (wid, widget) => {
    return fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findWidgetsForTopic = (topicId) => {
    return fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())
}

export const findAllWidgets =() =>{
    return fetch(`http://localhost:8080/api/widgets`)
        .then(response => response.json())
}

const api ={
    createWidgetForTopic, deleteWidget, updateWidget, findWidgetsForTopic, findAllWidgets
};

export default api;