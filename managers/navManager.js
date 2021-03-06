class NavManager {
	constructor(dataManager) {

		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.commentComponent = document.getElementById('commentsComponent');
		this.postsComponent = document.getElementById('postsComponent');

	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
		})
	}

	showPosts() {
		this.dataManager.currentBee.posts.forEach(post => {
			var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
		})
	}

	showComments() {
		this.dataManager.bees.forEach(bee => {
			var commentComponent = new CommentsComponent(bee, this.commentComponent, this.dataManager);
		})
	}
}