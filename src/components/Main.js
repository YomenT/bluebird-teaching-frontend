import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import AboutResources from './OtherResources'
import FocusLog from './FocusLog'
import Resources from './Resources'
import SatPrep from './SatPrep'
import NotFound from "./error";

// Heart of Algebra
import IntroductionToHeartOfAlgebra from './IntroductionToHeartOfAlgebra';
import IntroductionToFunctions from './IntroductionToFunctions';
import FunctionNotation from './FunctionNotation';
import IntroToLinear from './IntroToLinear';
import ModellingLinear from './ModellingLinear';
import ParallelPerpendicular from './ParallelPerpendicular';
import SystemofLinearEquations1 from './SystemofLinearEquations1';
import SystemofLinearEquations2 from './SystemofLinearEquations2';
import LinearInequalities from './LinearInequalities';
import GraphingLinearInequalities from './GraphingLinearInequalities';
import GraphingSystemsOfLinearInequalities from './GraphingSystemsOfLinearInequalities';

// Passport to Advanced Math
import PassportToAdvancedMathIntroduction from './passport-to-advanced-math/PassportToAdvancedMathIntroduction'
import PolynomialsPart1 from './passport-to-advanced-math/PolynomialsPart1'
import PolynomialsPart2 from './passport-to-advanced-math/PolynomialsPart2'
import PolynomialsPart3 from './passport-to-advanced-math/PolynomialsPart3'
import QuadraticFunctionPart1 from './passport-to-advanced-math/QuadraticFunctionPart1'
import QuadraticFunctionGraphicalAnalysis from './passport-to-advanced-math/QuadraticFunctionGraphicalAnalysis'
import QuadraticFunctionGraphicalAnalysis2 from './passport-to-advanced-math/QuadraticFunctionGraphicalAnalysis2'
import FactoringPart1 from './passport-to-advanced-math/FactoringPart1'
import FactoringPart2 from './passport-to-advanced-math/FactoringPart2'
import ExponentRules from './passport-to-advanced-math/ExponentRules';
import ExponentRules2 from './passport-to-advanced-math/ExponentRules2';
import QuadraticFormula from './passport-to-advanced-math/QuadraticFormula';
import CompletingTheSquare from './passport-to-advanced-math/CompletingTheSquare'
import QuadraticEquationsFoundationTest from './passport-to-advanced-math/QuadraticEquationsFoundationTest';
import VertexForm from './passport-to-advanced-math/VertexForm';
import QuadraticFunction from './passport-to-advanced-math/QuadraticFunction'
import RationalExpressions from './passport-to-advanced-math/RationalExpressions';
import GraphingQuadraticsVertexForm from './passport-to-advanced-math/GraphingQuadraticsVertexForm';
import RationalExpressions2 from './passport-to-advanced-math/RationalExpressions2';
import RationalExpressions3 from './passport-to-advanced-math/RationalExpressions3';
import QuadraticInequalities from './passport-to-advanced-math/QuadraticInequalities'
import ExponentialEquations from './passport-to-advanced-math/ExponentialEquations'
import RationalExpressionsEquations from './passport-to-advanced-math/RationalExpressionsEquations'
import RationalExpressionsInequalities from './passport-to-advanced-math/RationalExpressionsInequalities'

// Python
import Python from './Python'
import HowToCodePython from './python-pages/HowToCodePython';
import PolynomialsOfHigherDegree from './passport-to-advanced-math/PolynomialsOfHigherDegree';
import ChainsSeriesPdfPage from './ChainsSeriesPdfPage';

const Main = () => {
  return (
    <Switch> 
      {/* Main Links */}
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/about_resources' component={AboutResources}></Route>
      <Route exact path='/focus_log' component={FocusLog}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/satprep' component={SatPrep}></Route>
      <Route exact path='/python' component={Python}></Route>
      <Route exact path='/chains-series' component={ChainsSeriesPdfPage}></Route>

      {/* Heart of Algebra */}
      <Route exact path='/heart_of_algebra/about' component={IntroductionToHeartOfAlgebra}></Route>
      <Route exact path='/heart_of_algebra/introduction_to_functions' component={IntroductionToFunctions}></Route>
      <Route exact path='/heart_of_algebra/function_notation' component={FunctionNotation}></Route>
      <Route exact path='/heart_of_algebra/introduction_to_linear' component={IntroToLinear}></Route>
      <Route exact path='/heart_of_algebra/modelling_linear' component={ModellingLinear}></Route>
      <Route exact path='/heart_of_algebra/parallel_perpendicular' component={ParallelPerpendicular}></Route>
      <Route exact path='/heart_of_algebra/systems_linear_equation_part1' component={SystemofLinearEquations1}></Route>
      <Route exact path='/heart_of_algebra/systems_linear_equation_part2' component={SystemofLinearEquations2}></Route>
      <Route exact path='/heart_of_algebra/linear_inequalities' component={LinearInequalities}></Route>
      <Route exact path='/heart_of_algebra/graphing_linear_inequalities' component={GraphingLinearInequalities}></Route>
      <Route exact path='/heart_of_algebra/graphing_system_linear_inequalities' component={GraphingSystemsOfLinearInequalities}></Route>

      {/* Passport to Advanced Math */}
      <Route exact path='/passport_to_advanced_math/about' component={PassportToAdvancedMathIntroduction}></Route>
      <Route exact path='/passport_to_advanced_math/polynomials_part1' component={PolynomialsPart1}></Route>
      <Route exact path='/passport_to_advanced_math/polynomials_part2' component={PolynomialsPart2}></Route>
      <Route exact path='/passport_to_advanced_math/polynomials_part3' component={PolynomialsPart3}></Route>
      <Route exact path='/passport_to_advanced_math/intro_to_quadratic_functions' component={QuadraticFunctionPart1}></Route>
      <Route exact path='/passport_to_advanced_math/quadratic_graphical_analysis_part1' component={QuadraticFunctionGraphicalAnalysis}></Route>
      <Route exact path='/passport_to_advanced_math/quadratic_graphical_analysis_part2' component={QuadraticFunctionGraphicalAnalysis2}></Route>
      <Route exact path='/passport_to_advanced_math/factoring1' component={FactoringPart1}></Route>
      <Route exact path='/passport_to_advanced_math/factoring2' component={FactoringPart2}></Route>
      <Route exact path='/passport_to_advanced_math/exponent_rules_part1' component={ExponentRules}></Route>
      <Route exact path='/passport_to_advanced_math/exponent_rules_part2' component={ExponentRules2}></Route>
      <Route exact path='/passport_to_advanced_math/quadratic_formula' component={QuadraticFormula}></Route>
      <Route exact path='/passport_to_advanced_math/completing_the_square' component={CompletingTheSquare}></Route>
      <Route exact path='/passport_to_advanced_math/quadratics_foundations_checkup' component={QuadraticEquationsFoundationTest}></Route>
      <Route exact path='/passport_to_advanced_math/vertex_form' component={VertexForm}></Route>
      <Route exact path='/passport_to_advanced_math/graphing_quadratics' component={GraphingQuadraticsVertexForm}></Route>
      <Route exact path='/passport_to_advanced_math/quadratics_closer_look' component={QuadraticFunction}></Route>
      <Route exact path='/passport_to_advanced_math/rational_expressions_part1' component={RationalExpressions}></Route>
      <Route exact path='/passport_to_advanced_math/rational_expressions_part2' component={RationalExpressions2}></Route>
      <Route exact path='/passport_to_advanced_math/rational_expressions_part3' component={RationalExpressions3}></Route>
      <Route exact path='/passport_to_advanced_math/quadratic_inequalities' component={QuadraticInequalities}></Route>
      <Route exact path='/passport_to_advanced_math/polynomials_of_higher_degree' component={PolynomialsOfHigherDegree}></Route>
      <Route exact path='/passport_to_advanced_math/exponential_equations' component={ExponentialEquations}></Route>
      <Route exact path='/passport_to_advanced_math/equations_with_rational_expressions' component={RationalExpressionsEquations}></Route>
      <Route exact path='/passport_to_advanced_math/inequalities_with_rational_expressions' component={RationalExpressionsInequalities}></Route>

      {/* Python */}
      <Route exact path='/python' component={Python}></Route>
      <Route exact path='/python/introduction' component={HowToCodePython}></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Main;