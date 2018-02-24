import React from "react";
import styled from "styled-components";

const MovieListItem = ({ movie }) => {
	const { title,
		poster_path,
		release_date,
		vote_average
	} = movie;
	const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
	const year = release_date.substring(0, 4);

	return (
		<Movie>
			<MovieImg src={imgUrl} alt=""/>
			<MovieDesc>
				<MovieTitle>{title}</MovieTitle>
				<MovieDetails>
					<MovieYear>
						<MovieDetailsTitle>
							Year
						</MovieDetailsTitle>
						<MovieDetailsSubTitle>
							{year}
						</MovieDetailsSubTitle>
					</MovieYear>
					<MovieRating>
						<MovieDetailsTitle>
							Rating
						</MovieDetailsTitle>
						<MovieDetailsSubTitle>
							{vote_average}
						</MovieDetailsSubTitle>
					</MovieRating>
				</MovieDetails>
			</MovieDesc>
		</Movie>
	)
};

export default MovieListItem;

const Movie = styled.li`
flex-basis: 22%;
margin: 1.5%;
display: flex;
flex-direction: column;
list-style: none;
min-width:  150px;
margin: 1.5%;
border: 1px solid #eee;
box-shadow: 0 10px 28px -7px rgba(0,0,0,0.1);
`
const MovieImg = styled.img`
width: 100%;
`
const MovieDesc = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
	padding: 10px;
`
const MovieTitle = styled.h2`
	color: #555;
	font-weight: bold;
	margin-bottom: 20px;
`
const MovieDetails = styled.section`
	display: flex;
	justify-content: space-between;
`
const MovieDetailsTitle = styled.span`
	color: #aaa;
	margin-bottom: 5px;
	font-size: 0.65rem;
	font-weight: normal;
`
const MovieDetailsSubTitle = styled.span`
	color: #555;
	font-size: 0.8rem;
	font-weight: bold;
`

const MovieYear = styled.div`
	display: flex;
	flex-direction: column;
`
const MovieRating = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`