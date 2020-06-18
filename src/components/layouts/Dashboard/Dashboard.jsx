import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Sidebar from 'components/common-components/Sidebar';
import { Container } from 'reactstrap';
import Header from './Header';
import PanelHeader from './PanelHeader';
import { dashboard } from 'constants/router-constants';
import PropTypes from 'prop-types';
import Question from 'components/common-components/Question/Question';

const questions = [
  {'questionId':400,
    'question':'<p>&nbsp;What is BigDecimal.ONE?</p>\n',
    'timetaken':6757,
    'markedFlag':false,
    'solution':'<p>BigDecimal.ONE is a static variable of BigDecimal class with value 1 on scale 0.</p>\n','result':'WRONG','options':[{'optionId':1513,'option':'<p>wrong statement</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1514,'option':'<p>custom defined statement</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1515,'option':'<p>static variable with value 1 on scale 10<br />\n&nbsp;</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1516,'option':'<p>static variable with value 1 on scale 0</p>\n','imageType':false,'correctAnswer':true,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':402,'question':'<p>Which of the following is not provided by BigDecimal?</p>\n','timetaken':3708,'markedFlag':false,'solution':'<p>toBigInteger() converts BigDecimal to a BigInteger.toBigIntegerExact() converts this BigDecimal to a BigInteger by checking for lost information.</p>\n','result':'WRONG','options':[{'optionId':1521,'option':'<p>&nbsp;scale manipulation<br />\n&nbsp;</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1522,'option':'<p>+ operator</p>\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1523,'option':'<p>rounding</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1524,'option':'<p>hashing</p>\n','imageType':false,'correctAnswer':false,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':404,'question':'<p>&nbsp;Which of these coding types is used for data type characters in Java?</p>\n','timetaken':3802,'markedFlag':false,'solution':'<p>Unicode defines fully international character set that can represent all the characters found in all human languages. Its range is from 0 to 65536.</p>\n','result':'WRONG','options':[{'optionId':1529,'option':'<p>ASCII</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1530,'option':'<p>ISO-LATIN-1</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1531,'option':'<p>UNICODE</p>\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1532,'option':'<p>&nbsp;None of the mentioned</p>\n','imageType':false,'correctAnswer':false,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':405,'question':'<p>What is the numerical range of a char data type in Java?</p>\n','timetaken':1619,'markedFlag':false,'solution':'<p>Char occupies 16-bit in memory, so it supports 2^16 i:e from 0 to 65535.</p>\n','result':'WRONG','options':[{'optionId':1533,'option':'<p>-128 to 127</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1534,'option':'<p>0 to 256</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1535,'option':'<p>0 to 32767<br />\n&nbsp;</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1536,'option':'<p>0 to 65535</p>\n','imageType':false,'correctAnswer':true,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':406,'question':'<p>&nbsp;Which of these values can a boolean variable contain?</p>\n','timetaken':2057,'markedFlag':false,'solution':'<p>&nbsp;Boolean variable can contain only one of two possible values, true and false.</p>\n','result':'WRONG','options':[{'optionId':1537,'option':'<p>True &amp; False</p>\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1538,'option':'<p>0 &amp; 1</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1539,'option':'<p>Any integer value</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1540,'option':'<p>true</p>\n','imageType':false,'correctAnswer':false,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':407,'question':'<p>&nbsp;Which one is a valid declaration of a boolean?</p>\n','timetaken':1773,'markedFlag':false,'solution':'<p>Boolean can only be assigned true or false literals.</p>\n','result':'WRONG','options':[{'optionId':1541,'option':'<p>&nbsp;boolean b1 = 1;</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1542,'option':'<p>boolean b2 = &lsquo;false&rsquo;;</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1543,'option':'<p>&nbsp;boolean b3 = false;</p>\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1544,'option':'<p>boolean b4 = &lsquo;true&rsquo;</p>\n','imageType':false,'correctAnswer':false,'userSelected':true}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':329,'question':'<p>Which of these literals can be contained in float data type variable?</p>\r\n','timetaken':2940,'markedFlag':false,'solution':'<p>Range of float data type is -(3.4e38) To +(3.4e38)</p>\r\n','result':'WRONG','options':[{'optionId':1229,'option':'<p>-1.7e+308</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1230,'option':'<p>-3.4e+038</p>\r\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1231,'option':'<p>+1.7e+308</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1232,'option':'<p>-3.4e+050</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':330,'question':'<p>An expression involving byte, int, and literal numbers is promoted to which of these?</p>\r\n','timetaken':1989,'markedFlag':false,'solution':'<p>An expression involving bytes, ints, shorts, literal numbers, the entire expression is promoted to int before any calculation is done.</p>\r\n','result':'WRONG','options':[{'optionId':1233,'option':'<p>int</p>\r\n','imageType':false,'correctAnswer':true,'userSelected':false},{'optionId':1234,'option':'<p>long</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1235,'option':'<p>byte</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1236,'option':'<p>float</p>\r\n','imageType':false,'correctAnswer':false,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':366,'question':'<p>What is the limitation of toString() method of BigDecimal?</p>\n','timetaken':5880,'markedFlag':false,'solution':'<p>toString() of BigDecimal uses scientific notation to represent numbers known as canonical representation. We must use toPlainString() to avoid scientific notation</p>\n','result':'WRONG','options':[{'optionId':1377,'option':'<p>There is no limitation</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1378,'option':'<p>toString returns null</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},{'optionId':1379,'option':'<p>toString returns the number in expanded form</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},{'optionId':1380,'option':'<p>toString uses scientific notation</p>\n','imageType':false,'correctAnswer':true,'userSelected':false}],'imageType':false,'imageSolution':false,'overtimed':false},{'questionId':399,'question':'<p>Which class is a library of functions to perform arithmetic operations of BigInteger and BigDecimal?</p>\n','timetaken':36488,'markedFlag':false,'solution':'<p>MathContext class is a library of functions to perform arithmetic operations of BigInteger and BigDecimal.</p>\n','result':'WRONG',
    'options':[
      {'optionId':1509,'option':'<p>MathContext</p>\n','imageType':false,'correctAnswer':true,'userSelected':false},
      {'optionId':1510,'option':'<p>MathLib</p>\n','imageType':false,'correctAnswer':false,'userSelected':false},
      {'optionId':1511,'option':'<p>BigLib</p>\n','imageType':false,'correctAnswer':false,'userSelected':true},
      {'optionId':1512,'option':'<p>BigContext</p>\n','imageType':false,'correctAnswer':false,'userSelected':false}],
    'imageType':false,
    'imageSolution':false,
    'overtimed':false
  }];


const Dashboard = ({ history, creditPoints, profileName, imagePreviewUrl, location }) =>{
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <Header routes={dashboard} history={history} location={location}/>
        <div>
          <PanelHeader size="sm"/>
          <div className="content">
            {
              questions.map((question) => <Question
                key={question.questionId}
                questionData = {question}
                showWrongOption = {true}
              />)
            }
          </div>
        </div>
        <footer className={'footer'}>
          <Container>
            <div className="copyright">
            &copy;2018, All rights reserved by skilloptima Pvt Ltd.
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  creditPoints: PropTypes.string,
  profileName: PropTypes.string,
  imagePreviewUrl: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Dashboard;