import {screen} from "@testing-library/react";
import Footer from "./Footer";
import {renderWithProviders} from "../../utils/test-utils";

describe('Footer component', () => {
    test('renders link to github', () => {
        // Arrange
        renderWithProviders(<Footer/>);

        // Act
        // ... nothing

        // Assert
        expect(screen.getByRole('link', {})).toHaveAttribute('href', '')
    });
});
