// con esto hace clicl a los botones de follow
let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn')
hashtagBtns.forEach(btn => btn.click())

// con esto hace click en los botones para hacer unfollowing
const followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn')
followingBtns.forEach(followbtn => followbtn.click())