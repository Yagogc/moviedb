
import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components"

const tmdb = 'c857fa67fba523ad3ce66df18e7ab279';
const movies = ["Breaking bad", "Narcos", "Game of Thrones"];
class Movies extends React.Component {
	
	state = {
		movies: []
	}
	
	storeMovies = data => {
		const movies = data.results.map( result => {
			const {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			} = result;
			return {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			};
		});
	
		this.setState({ movies })
	}
	componentDidMount() {
		const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
	
		fetch(apiUrl)
			.then(response => response.json())
			.then(data => this.storeMovies(data))
			.catch(error => console.log(error))
	
		console.log("Before or after data?");
	}
	
	render() {
		return (
		<Section>
			<ul>
			{
			this.state.movies.map( movie => (
				<MovieListItem key={movie.id} movie={movie} />
				))
			}
			</ul>
		</Section>
		)
	}
}

export default Movies;

const Section = styled.section`
ul {
	flex-basis: 80%;
	display: flex;
	flex-wrap: wrap;
	
	padding: 20px 0;
	margin: 0;
}
`