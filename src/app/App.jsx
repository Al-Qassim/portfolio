import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoPython, BiMath } from "react-icons/bi";
import { BsGit, BsPuzzle } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

//import images
import Workshot from '../assets/images/Workshot.png';
import VoteChain from '../assets/images/VoteChain.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'HTML',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'python',
		icon: <BiLogoPython size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	},
	{
		name: 'Mathematics',
		icon: <BiMath size="25px" color="white" />,
		cssName: "problem-solving"
	},
];

const projects = [
	{
		name: `Workshot`,
		link: 'https://al-qassim.github.io/Workshop_Sales/',
		github: 'https://github.com/Al-Qassim/Workshop_Sales',
		description: "A Comprehensive Sales Management Application. Workshot is a powerful tool designed to streamline business operations by simplifying sales and inventory management. With an intuitive interface and robust features, Workshot enables businesses to Manage Inventory, Monitor Sales, and Gain Financial Insights, Whether you're a small business owner or managing a large enterprise, Workshot empowers you to stay organized and maximize profitability.",
		image: Workshot
	},
	{
		name: 'VoteChain',
		link: 'https://youtu.be/6hPY2RpzsEI',
		github: 'https://github.com/Al-Qassim/VoteChain',
		description: "Open Source BlockChain-based election management web application. Despite the digital age we live in, elections are still conducted with paper in most parts of the world. That is because elections require serious security requirements that, until the last decade, digital systems didn't have the right tools to meet those requirements. Blockchain and zk-SNARK are modern tools that make it possible for the electronic systems to meet the elections requirements (other than the safe input device requirement). In this project, we developed the classical basics for such a system; all essential components, from users managing their polls to displaying results, are present. Future development would include the integration of this web app with the Ethereum blockchain.",
		image: VoteChain
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_rmm9h5l', 'template_h0snbqu', form.current, "r5CC8UE0izHfK4d66")
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Alqassim Ali</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HI! I'M Alqassim Ali</h1>
					<p>A Full Stack Web Developer building Web Applications that leads to the success of the overall product</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/Al-Qassim' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:qassimali624@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					{/* <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p> */}
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							{/* <h3>Get to know me!</h3> */}
							<p>
								I'm a <span>Full Stack Web Developer</span> building the Back-end and Front-end of Web Applications that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section. <br /> <br />

								{/* Feel free to Connect or Follow me on my <a href="https://github.com/Al-Qassim" target="_blank">Github</a>. <br /> <br /> */}
								I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created.</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											{project.link != null && <IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>}
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>
						Phone: (+964) 770 909 9984
						<br></br>
						Email: qassimali624@gmail.com
						<br></br>
						<br></br>
						Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
					</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Alqassim Ali</h3>
							<p>A Full Stack Web Developer, building Web Applications that leads to the success of the overall product</p>
						</div>
						<div className={style.social}>
							{/* <h3>Social</h3> */}
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/Al-Qassim' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:qassimali624@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2023. portfolio template was made by <span>Ibrahim Hiarea</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;