import MessagesScreen from "components/Messages/MessagesScreen"



const mockData = {
    messages: [
        {
            img: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
            name: "Andrew Parker",
            visibleMessage: "You: Ok, thanks",
            visibleMessageTime: "9: 25 AM"
        }
    ],
}

const Messages = () => {
    return <MessagesScreen />
}

export default Messages