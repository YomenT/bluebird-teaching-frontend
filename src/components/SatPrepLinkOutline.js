import React from "react";
import { Link } from "react-router-dom"

class SatPrepLinkOutline extends React.Component {

    changeLinkColorEnter(e) {
        e.target.style.color = "#5b92e5";
    }

    changeLinkColorLeave(e) {
        e.target.style.color = "#365789";
    }

    render() {
        return (
            <div style={{ paddingBotton: "25px" }}>
                <h4 className="h4-blue-headers">Heart of Algebra</h4>
                <ol className="list-medium">
                    <li style={{ paddingTop: "20px" }}><Link to="/heart_of_algebra/about" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}><strong>A little bit about Heart of Algebra</strong></Link></li>
                    <li><Link to="/heart_of_algebra/introduction_to_functions" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Introduction to Functions</Link></li>
                    <li><Link to="/heart_of_algebra/function_notation" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Function Notation</Link></li>
                    <li><Link to="/heart_of_algebra/introduction_to_linear" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Introduction to Linear Functions</Link></li>
                    <li><Link to="/heart_of_algebra/modelling_linear" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Modelling Linear Equations</Link></li>
                    <li><Link to="/heart_of_algebra/parallel_perpendicular" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Paralell and Perpendicular Lines</Link></li>
                    <li>System of Linear Equations</li>
                        <ul className="list-medium">
                            <li><Link to="/heart_of_algebra/systems_linear_equation_part1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="/heart_of_algebra/systems_linear_equation_part2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>
                        </ul>
                    <li><Link to="/heart_of_algebra/linear_inequalities" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Linear Inequalities</Link></li>
                    <li><Link to="/heart_of_algebra/graphing_linear_inequalities" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Graphing Linear Inequalities</Link></li>
                    <li style={{ paddingBottom: "25px" }}><Link to="/heart_of_algebra/graphing_system_linear_inequalities" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Graphing Systems of Linear Inequalities</Link></li>
                </ol>
                <h4 className="h4-blue-headers">Problem Solving and Data Analysis</h4>
                <h4 className="h4-blue-headers">Passport to Advanced Math</h4>
                <ol className="list-medium">
                    <li style={{ paddingTop: "20px" }}><Link to="/passport_to_advanced_math/about" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}><strong>A little bit about Passport to Advanced Math</strong></Link></li>
                    <li>Polynomials</li>
                        <ul className="list-medium">
                            <li><Link to="/passport_to_advanced_math/polynomials_part1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="/passport_to_advanced_math/polynomials_part2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>
                            <li><Link to="/passport_to_advanced_math/polynomials_part3" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 3</Link></li>
                        </ul>
                    <li><Link to="/passport_to_advanced_math/intro_to_quadratic_functions" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Introduction to the Quadratic Function</Link></li>
                    <li>Factoring Quadratic Equations</li>
                        <ul className="list-medium">
                            <li><Link to="/passport_to_advanced_math/factoring1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="/passport_to_advanced_math/factoring2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>
                        </ul>
                    <li><Link to="passport_to_advanced_math/quadratic_formula" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>The Quadratic Formula</Link></li>
                    <li><Link to="passport_to_advanced_math/completing_the_square" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Completing the Square</Link></li>
                    <li><Link to="passport_to_advanced_math/quadratics_foundations_checkup" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}><strong><i>Quadratics Checkup</i></strong></Link></li>
                    <li><Link to="passport_to_advanced_math/vertex_form" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Introducing Vertex Form</Link></li> 
                    <li><Link to="passport_to_advanced_math/graphing_quadratics" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Graphing Quadratics With Vertex Form</Link></li>  {/* In Progress */}
                    <li>Quadratic Function Graphical Analysis</li>
                        <ul className="list-medium">
                            <li><Link to="/passport_to_advanced_math/quadratic_graphical_analysis_part1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="/passport_to_advanced_math/quadratic_graphical_analysis_part2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>
                        </ul>
                    <li><Link to="passport_to_advanced_math/quadratics_closer_look" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Closer Look at Quadratic Functions</Link></li>
                    <li><Link to="passport_to_advanced_math/quadratic_inequalities" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Quadratic Inequalities</Link></li>
                    <li>Rational Expressions</li>
                        <ul className="list-medium">
                            <li><Link to="/passport_to_advanced_math/rational_expressions_part1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="passport_to_advanced_math/rational_expressions_part2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>
                            <li><Link to="passport_to_advanced_math/rational_expressions_part3" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 3</Link></li>
                        </ul>
                        <li><Link to="passport_to_advanced_math/equations_with_rational_expressions" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Equations With Rational Expressions</Link></li>
                        <li><Link to="passport_to_advanced_math/inequalities_with_rational_expressions" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Inequalities With Rational Expressions</Link></li>
                    <li><Link to="passport_to_advanced_math/polynomials_of_higher_degree" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Polynomials of Higher Degree</Link></li>
                    <li>Exponent Rules</li>
                        <ul className="list-medium">
                            <li><Link to="/passport_to_advanced_math/exponent_rules_part1" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 1</Link></li>
                            <li><Link to="/passport_to_advanced_math/exponent_rules_part2" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Part 2</Link></li>  {/* In Progress */}
                        </ul>
                    <li style={{ paddingBottom: "25px" }}><Link to="passport_to_advanced_math/exponential_equations" style={{ color: "#365789" }} onMouseOver={this.changeLinkColorEnter} onMouseOut={this.changeLinkColorLeave}>Exponential Equations</Link></li>
                </ol>
                <h4 className="h4-blue-headers">Additional Topics in Math</h4>
            </div>
        )
    }
}

export default SatPrepLinkOutline