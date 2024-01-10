import { render, screen, fireEvent, queryByText } from '@testing-library/react'
import TaskList from '../components/TaskList'

describe("The task list is rendered and functions as expected", () => {
    test("The task list container is rendered", () => {
        render(<TaskList />)
        const taskListContainer = screen.getByTestId("tasklist__container")

        expect(taskListContainer).toBeInTheDocument();
    })

    test(" A new task is added to the list", () => {
        render(<TaskList />)
        const mockTask = "Wash clothes";
        const input = screen.getByLabelText(/Add a new task/i)
        const addButton = screen.getByRole("button", { name: "Add item" });

        let listItems = screen.getAllByTestId("task-item");
        expect(listItems.length).toBe(2)
        expect(listItems[0]).toHaveTextContent(/fish/i)

        fireEvent.change(input, { target: { value: mockTask } })

        expect(input.value).toEqual(mockTask)

        fireEvent.click(addButton)

        listItems = screen.getAllByTestId("task-item");
        expect(listItems.length).toBe(3)
        expect(listItems[2]).toHaveTextContent(/wash/i)
    })

    test("That items are removed from the task list", () => {
        render(<TaskList />)
        let listItems = screen.getAllByTestId("task-item");
        let fishTask = screen.queryByText(/fish/i);
        expect(listItems.length).toBe(2)
        expect(fishTask).toBeInTheDocument()
       
        const deleteButtons = screen.getAllByRole("button", { name: "Remove" })

        fireEvent.click(deleteButtons[0])

        listItems = screen.getAllByTestId("task-item");
        fishTask = screen.queryByText(/fish/i);
        expect(listItems.length).toBe(1)
        expect(fishTask).not.toBeInTheDocument()
    })
})