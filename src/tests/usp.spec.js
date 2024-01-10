import {render, screen, fireEvent } from '@testing-library/react'
import USP from '../components/USP'


describe("The USP component is rendered and functions correctly", () => {
    test("Unique selling points are not rendered on page load", () => {
        render(<USP />)
    
        const list = screen.queryByRole("list");
        const listItems = screen.queryAllByRole("listitem");
    
        expect(list).not.toBeInTheDocument();
        expect(listItems.length).not.toBe(3)
    })

    test("USPS are rendered when the button is clicked", () => {
        render(<USP />)

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        fireEvent.click(button)

        const list = screen.queryByRole("list");
        const listItems = screen.queryAllByRole("listitem");
    
        expect(list).toBeInTheDocument();
        expect(listItems.length).toEqual(3)
    })
})

