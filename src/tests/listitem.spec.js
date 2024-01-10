import {render, screen} from  '@testing-library/react'
import ListItem from '../components/ListItem'

test("That data is passed to the List Item component", () => {
    const mockTask = {
        id: 123,
        description: "Iron the clothes"
    }

    render(<ListItem task={mockTask} />)

    const listItem = screen.getByTestId("task-item");
    const button = screen.getByRole("button");

    expect(listItem).toHaveTextContent(/iron the clothes/i);
    expect(button).toHaveTextContent(/remove/i)

})