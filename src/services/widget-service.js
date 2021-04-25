const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidgetForTopic = (topicId, widget) => {
    // TODO: move server communication to widget-service.js
    return fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteWidget = (wid) => {
    return fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "DELETE",
    }).then(response => response.json())
}

export const updateWidget = (wid, widget) => {
    return fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())
}

export const findAllWidgets =() =>{
    return fetch(`${WIDGET_URL}/widgets`)
        .then(response => response.json())
}
const api ={
    createWidgetForTopic, deleteWidget, updateWidget, findWidgetsForTopic, findAllWidgets
};
export default api;