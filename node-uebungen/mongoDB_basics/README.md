- Rufe alle Filme ab, bei denen der Regisseur (director) Steven Spielberg ist und gib nur das Feld 'Titel' aus.

```PHP
db.movieDetails.find({director: "Steven Spielberg"})
```

-Rufe alle Filme ab, bei denen die Anzahl der Benutzerbewertungen bei Rotten Tomatoes mehr als 40000 ist. Beschränke die Suche auf 20 Filme und sortiere sie absteigend nach Benutzerbewertungen.

```PHP
db.movieDetails.find({"tomato.userReviews": { $gt: 40000 }}).limit(20).sort({"tomato.userReviews": -1})
```

- Rufe alle Filme ab, die zwischen 2000 und 2005 gedreht wurden (beide Jahre eingeschlossen) und gib nur die Felder 'Titel' und 'Jahr' aus.

```PHP
db.movieDetails.find({year: {$gte : 2000, $lte: 2005}}, {year: 1, title: 1, _id: 0})
```

- Rufe alle Filme ab, die eine Rotten Tomatoes Benutzerbewertung von mindestens 4 haben und nach 2010 entstanden sind. Gib nur die Felder 'Titel' und 'Regisseur' (director) aus.

```PHP
db.movieDetails.find({"tomato.rating": {$gte : 4}, year: {$gt: 2010}}, {title: 1, director: 1, _id: 0})
```

- Rufe alle Filme ab, die weniger als 1000 Benutzer-Rezensionen bei Rotten Tomatoes haben und vor dem Jahr 2005 gedreht wurden. Sortiere sie aufsteigend nach der Anzahl der Benutzer-Rezensionen und beschränke die Suche auf 10 Filme.

```PHP
db.movieDetails.find({"tomato.userReviews" : {$lt: 1000}, year: {$lt: 2005}}).sort({"tomato.userReviews" : 1}).limit(10)
```

- Rufe alle Filme ab, die das Feld 'Rotten Tomatoes' nicht enthalten.

```PHP
db.movieDetails.find({"tomato.userReviews" : {$exists: false} })
```

- Rufe alle Filme ab, die mindestens 100 IMDb-Stimmen, aber weniger als 1000 haben und gib nur die Felder 'Titel' und 'IMDb Bewertung' aus.

```PHP
db.movieDetails.find({"imdb.votes" : {$gte: 100, $lt: 1000}}, {title: 1, "imdb.rating": 1, _id: -1})
```

- Sortiere alle Filme absteigend nach ihrer IMDb-Bewertung.

```PHP
db.movieDetails.find().sort({"imdb.rating": -1})
```

- Rufe die 10 Filme mit der höchsten IMDb-Bewertung ab, sortiert in absteigender Reihenfolge.

```PHP
db.movieDetails.find().sort({"imdb.rating": -1}).limit(10)
```

- Rufe alle Filme mit den Genres 'Crime' und 'Drama' ab und gib nur die Felder 'Titel' und 'Genre' aus. Sortiere sie aufsteigend nach ihrer IMDb-Bewertung.

```PHP
db.movieDetails.find({genres: ['Crime', 'Drama']}, {title: 1, genres: 1, _id: 0}).sort({"imdb.rating": 1})
```
