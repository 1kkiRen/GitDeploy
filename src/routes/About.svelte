<script>
	import image2 from '$lib/images/image2.jpg';
</script>

<section class="about" id="about-section">
	<div class="title">
		<h2>About Me</h2>
		<p>I was born in Tver, Russia. I've been doing programming since 8th grade of school.</p>
	</div>
	<div class="content">
		<div class="image">
			<img src={image2} alt="Something went wrong" />
		</div>
		<div class="text">
			<h2>I'm Dmitrii Kuzmin</h2>
			<p>This is my real photo.</p>
		</div>
	</div>
</section>

<style>
	.about {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 9rem;
		background-color: #fff6ec;
	}

	.about .title {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.about .title h2 {
		color: #1c2333;
		font-size: 2rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.about .title p {
		color: #1c2333;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 2rem;
	}

	.about .content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.about .content .image {
		width: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about .content .image img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out;
	}

	.about .content .image img:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
	}

	.about .content .text {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}

	.about .content .text h2 {
		color: #1c2333;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.about .content .text p {
		color: #1c2333;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}
</style>
