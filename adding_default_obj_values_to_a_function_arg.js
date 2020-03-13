const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
    // summary: ''
    // summary: undefined
  }
  
  const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
    console.log(`
      og-title=${title}
      og-description=${summary}
    `);
  }
  
  openGraphMetadata(blog);



const user = {
    username: "Edwin",
    status: "away"
}

const loginEvent = (userObj) => {
    user.status = "active";
    return (`${user.username} is ${user.status}`)
}

console.log(loginEvent(user));