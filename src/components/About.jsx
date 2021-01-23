import React, { useEffect, useState } from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

function About() {
    return (<div className="cv">
        <table>
        <tbody>
            <tr>
                <td><img src="images/self.png" alt="personal image"/></td>
                <td>
                    <h1>Kangrong Hu</h1>
                    <p>A graducate student studying on the <em><strong>University of Southern California</strong></em>.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <h3>
        COMPUTER SKILLS
    </h3>
    <table>
        <tbody>
            <tr>
                <td>Language:</td>
                <td>Python; Java; C#; C/C++; Shell; UML; SQL</td>
            </tr>
            <tr>
                <td>Technical skills:</td>
                <td>HTML; CSS; JavaScript; React.js; Object-Oriented Programming; TypeScript; Computer Network; Rest
                    API; Docker</td>
            </tr>
            <tr>
                <td>Relevant concepts:</td>
                <td>Keras; Git; Springboot; Rose IBM; Mysql</td>
            </tr>
        </tbody>
    </table>
    <ColoredLine color="black" />
    <h3>EDUCATION</h3>
    <ul>
        <li>
            <p>
                09/2020-Present University of Southern California, Los Angeles, CA{'\n'}
                Master of Computer Science
            </p>
        </li>
        <li>
            <p>
                09/2014-06/2018 University of Electronic Science and Technology of China, Chengdu, Sichuan, China
                {'\n'} Bachelor of Management, Information System
                {'\n'} Emphasized in Information Analysis and developing Information System
                {'\n'} GPA: 3.83/4
            </p>
        </li>
    </ul>
    <ColoredLine color="black" />
    <h3>PROJECT EXPERIENCE</h3>
    <table>
        <tbody>
            <tr>
                <td>Clustering Algorithm -- <a
                        href="https://www.sciencedirect.com/science/article/abs/pii/S0925231218312049">Semi-Supervised
                        Deep Embedded Clustering</a> </td>
                <td>January2019</td>
            </tr>
            <tr>
                <td>
                    <p>
                    <ul>
                        <li>Proposed a novel semi-supervised deep embedded clustering algorithm in this research
                            experience</li>
                        <li>Remodeled old deep learning model, we improved the precision of the original algorithm from
                            84.94 to 86.11 in the MNIST dataset</li>
                        <li>Wrote the code of our experiments and I'm also proficient in Keras and Tensorflow</li>
                        <li>Implemented in the Python, Tensorflow, and Unix platform</li>
                        <li>Published in Neurocomputing as the second author</li>
                    </ul>
                    </p>
                </td>
            </tr>
            <tr>
                <td>Clinical Trial Platform Based on RFID(Radio Frequency Identification) Technology </td>
                <td>June 2016</td>
            </tr>
            <tr>
                <td>
                    <p>
                    <ul>
                        <li>Helping investigators do clinical trail like providing locations and status of medicines and
                            patients from website
                        </li>
                        <li>Guaranteed that information scaned by RFID machines could be
                            uploaded to cloud plateform
                        </li>
                        <li>Used some simple rule to determine whether the platform needs to give warning
                            to researchers
                        </li>
                        <li>
                            Utilized C#, Web Service and RFID technology
                        </li>
                    </ul>
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <h4>COURSE PROJECTS</h4>
                </td>
            </tr>
            <tr>
                <td>Warehouse Management System </td>
                <td>December 2017</td>
            </tr>
            <tr>
                <td>
                    <p>
                    <ul>
                        <li>
                            Designed an Object-Oriented System for a warehouse management</li>
                        <li>
                            Responsible for parts of object-oriented analysis and object-oriented modeling of a
                            warehouse management system like processing of warehousing and shipment
                        </li>
                        <li>
                            Extracted the abstract from the warehouse managing processing and utilizing Unified
                            Modeling Language(UML) to represent the system.
                        </li>
                        <li>
                            Based on Rational Rose and Visio
                        </li>
                    </ul>
                    </p>
                </td>
            </tr>
            <tr>
                <td>Shopping Website </td>
                <td>December 2017</td>
            </tr>
            <tr>
                <td>
                    <p>
                    <ul>
                        <li>
                            Built a shopping website by C#, developed it on the aliyun. All the products’ data was
                            stored in the cloud.</li>
                        <li>
                            Utilized encapsulation for improving coding reusable.
                        </li>
                        <li>
                            Bonded data and fronted to automatic loading products in the current category.
                        </li>
                    </ul>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <ColoredLine color="black" />
    <h3>RELEVANT COURSEWORK</h3>
    <table>
        <tbody>
            <tr>
                <ul>
                    <li>
                        Object-Oriented Programming, Object-Oriented Language, C#: Web-development
                    </li>
                    <li>
                        Database Systems, Computer Organization
                    </li>
                    <li>
                        CSCI455X Introduction to Programming System Design, CSCI570 Analysis of Algorithms
                    </li>
                </ul>
            </tr>
        </tbody>
    </table>
    <ColoredLine color="black" />
    <h3>PUBLICATIONS</h3>
    <p>Ren Y, Hu K, Dai X, et al. <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0925231218312049">Semi-Supervised
            Deep Embedded Clustering</a>[J]. Neurocomputing, 2019, 325: 121-130.</p>
    </div>);

}
export default About;