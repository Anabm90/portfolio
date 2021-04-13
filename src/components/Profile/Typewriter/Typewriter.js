import React from 'react';
import { from, interval, concat, of } from 'rxjs';
import { map, take, repeat, delay, concatMap, ignoreElements } from 'rxjs/operators';
import { useObservable } from 'rxjs-hooks';
import './Typewriter.scss';

const type = ({ word, speed, backwards = false }) =>
	interval(speed).pipe(
		map((x) => (backwards ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1))),
		take(word.length)
	);

const typeEffect = (word) =>
	concat(
		type({ word, speed: 30 }), // type forwards
		of('').pipe(delay(1200), ignoreElements()), // pause
		type({ word, speed: 20, backwards: true }), // delete
		of('').pipe(delay(200), ignoreElements()) // pause
	);

const titles = [ 'Front-end Developer', 'Graphic Designer', 'Cat lover' ];

export default function Typewriter() {
	const value = useObservable(() => from(titles).pipe(concatMap(typeEffect), repeat()));
	return (
		<div className="typewriter">
			<h2>{value}</h2>
		</div>
	);
}
