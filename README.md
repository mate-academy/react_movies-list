# Movies list
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://Oleksandr-Ivanchenko.github.io/react_movies-list/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
You are given movies loaded from API and the initial markup.
1. Split the markup into `MoviesList` and `MovieCard` components
2. `App` should pass the `moviesFromServer` to the `MoviesList` as a prop
3. `MoviesList` should render a `MovieCard` per each movie
4. All the fields in the `movie` are required

## REQUIREMENTS

- main `div` `MovieCard` component should have a `data-cy="card"` attribute
- `MovieCard` should pass the props: `title`, `description`, `imbdUrl`, `imgUrl`


## Задача
Вам даются загруженные из API фильмы и начальная разметка.
1. Разделите разметку на компоненты MoviesList и MovieCard.
2. «Приложение» должно передавать «moviesFromServer» в «MoviesList» в качестве реквизита.
3. `MoviesList` должен отображать `MovieCard` для каждого фильма.
4. Все поля в `фильме` обязательны для заполнения.

## ТРЕБОВАНИЯ

- основной компонент `div` `MovieCard` должен иметь атрибут `data-cy="card"`
- `MovieCard` должен передавать реквизиты: `title`, `description`, `imbdUrl`, `imgUrl`
