class NavManager {
	constructor(dataManager) {

		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.commentComponent = document.getElementById('commentsComponent');
		this.postComponent = document.getElementById('postComponent');
		
	}

		showBees(){
			this.dataManager.bees.forEach(bee =>{
				var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
			})
		}

		showPosts(){
			this.dataManager.bees.forEach(bee =>{
				var postComponent = new PostsComponent(bee, this.postComponent, this.dataManager);
			})
		}

		showComments(){
			this.dataManager.bees.forEach(bee =>{
				var commentComponent = new CommentsComponent(bee, this.commentComponent, this.dataManager);
			})
		}
}