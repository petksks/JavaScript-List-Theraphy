import {render, screen} from '@testing-library/react'
import Header from '../components/Header'

test("The page title and sub title are rendered", () =>{
    render(<Header title="Task List" />)

    const pageTitle = screen.getByRole("heading",  {level: 1});
    const subTitle = screen.getByRole("heading", {level: 2});

    expect(pageTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
})