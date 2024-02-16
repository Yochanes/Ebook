document.addEventListener('DOMContentLoaded', function () {
	const profileLink = document.querySelector('.link_profile')
	const profileMenu = document.querySelector('.profile-menu')

	profileLink.addEventListener('click', function () {
		this.classList.toggle('active')
		profileMenu.classList.toggle('active')
	})
})
