import { fireEvent, render, screen } from '@testing-library/react'
import AddItem from '../components/AddItem'

describe("Add item functionality works as intended", () => {
    test("The form is rendered", () => {
        render(<AddItem />)

        const form = screen.getByRole("form");
        const input = screen.getByLabelText(/Add a new task/i)
        const button = screen.getByRole("button");

        expect(form).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    test("Content of the input is updated", () => {
        render(<AddItem />)
        const mockTask = "Wash clothes";

        const input = screen.getByLabelText(/Add a new task/i)

        expect(input.value).not.toEqual(mockTask)

        fireEvent.change(input, { target: { value: mockTask}})
        expect(input.value).toEqual(mockTask)
    })
})