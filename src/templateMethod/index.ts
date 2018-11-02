import User from "./User";
import Post from "./Post";

export default () => {
    console.log('------------ Start Template Method Pattern --------------')

    const user = new User()
    user.setName('Juan Muestra')
    user.save()

    const post = new Post()
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet leo eu ipsum congue.`
    post.setText(text)
    post.save()


    console.log('------------ End Template Method Pattern --------------')
}

