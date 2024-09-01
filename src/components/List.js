function Task(props) {
	
	console.log(props)

	function onChange() {
		// Find the task we want to update and update it
		props.setTasks(tasks => tasks.map(task => {
			if (task.id === props.id) {
				return {
					id: task.id,
					description: task.description,
					completed: !task.completed
				};
			} else {
				return task;
			} 
		}));
	}

	return (
		<li>
			{ props.description } 
			<input 
				type="checkbox" 
				checked={props.completed} 
				onChange={onChange} 
			/>
		</li>
	);
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{ props.tasks.map(task => 
					<Task 
						setTasks={props.setTasks}
						id={task.id}
						description={task.description} 
						completed={task.completed} 
					/>) }
			</ul>
		</div>
	);
}

export default List;
