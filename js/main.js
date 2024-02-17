document.addEventListener('DOMContentLoaded', function () {
	const profileLink = document.querySelector('.link_profile')
	const profileMenu = document.querySelector('.profile-menu')

	profileLink.addEventListener('click', function () {
		this.classNameList.toggle('active')
		profileMenu.classNameList.toggle('active')
	})
})
