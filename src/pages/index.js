import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import SEO from '../components/SEO'
import Logo from '../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import IosDownloadLink from '../components/IosDownloadLink'
import AndroidDownloadLink from '../components/AndroidDownloadLink'
import asImg from '../assets/images/as.png'
import appScreenImg from '../assets/images/app-screen.png'
import heroImg from '../assets/images/hero.png'
import mobileHeroImg from '../assets/images/mobile-hero.png'
import windUpImg from '../assets/images/wind-up.png'
import windDownImg from '../assets/images/wind-down.png'
import bgUpImg from '../assets/images/bg-up.png'
import bgDownImg from '../assets/images/bg-down.png'
import ValuePropIcon1 from '../assets/icons/ValuePropIcon1'
import ValuePropIcon2 from '../assets/icons/ValuePropIcon2'
import ValuePropIcon3 from '../assets/icons/ValuePropIcon3'
import RiderIcon from '../assets/icons/RiderIcon'
import DriverIcon from '../assets/icons/DriverIcon'
import cx from 'classnames'

function Index() {
  const [role, setRole] = useState('rider')
  const valueProp1Title = role === 'rider' ? '交通時間短' : '媒合快速'
  const valueProp1Desc =
    role === 'rider'
      ? '相較於搭乘捷運公車，汽車共乘給予您更快速的移動選項'
      : '快速為您找到想搭車的乘客， 讓您不必因載客而失去寶貴時間'
  const step1Title =
    role === 'rider' ? '選擇搭乘站點及目的地' : '選擇出發第、目的地以及發車時間'
  const step3Title =
    role === 'rider' ? '至指定地點與司機會面' : '至指定地點與乘客會面'
  const step3Desc =
    role === 'rider' ? '開始享受您快速的旅程' : '開始享受這段不一樣的旅程'

  return (
    <MainLayout>
      <SEO />
      <div className="container mx-auto mt-10 sm:mt-20">
        <div>
          <h1
            className="text-dark-gray text-3xl sm:text-4xl font-bold sm:tracking-wider mx-2 sm:mx-0"
            style={{ lineHeight: '3.2rem' }}
          >
            以更
            <span className="text-primary">輕鬆</span>、
            <span className="text-primary">快速</span>
            的方式
            <br />
            往返中研院及鄰近捷運站
          </h1>
          <div className="flex items-center mt-10 mx-2 sm:mx-0">
            <IosDownloadLink styles="mr-1 sm:mr-4" />
            <AndroidDownloadLink />
          </div>
          <div className="mt-5 mx-2 sm:mx-0">
            <img src={asImg} alt="中央研究院" />
          </div>
        </div>
        <div className="absolute top-0 right-0 xl:w-auto lg:w-3/5 hidden lg:block">
          <img src={heroImg} alt="Hero image" />
        </div>
        <div className="absolute top-12 right-0 xl:w-auto lg:w-3/5 hidden sm:block lg:hidden mobileHero">
          <img src={mobileHeroImg} alt="Hero image" />
        </div>
        <div
          className="absolute left-0 w-auto hidden sm:block"
          style={{ top: '60vh' }}
        >
          <img src={windUpImg} alt="Wind" />
        </div>
      </div>

      <div
        className="flex static sm:absolute w-full"
        style={{ top: '80vh' }}
        id="role-switch"
      >
        <button
          className="relative flex items-center border-solid border-light-gray border-2 w-1/2 border-l-0 py-3 sm:py-5 justify-center focus:outline-none"
          onClick={() => {
            setRole('rider')
            const roleSwitch = document.getElementById('role-switch')
            window.scrollTo(0, roleSwitch.offsetTop)
          }}
        >
          <div
            className={cx('absolute h-1 rounded', { hidden: role !== 'rider' })}
            style={{
              backgroundColor: '#2d74bb',
              top: '-3px',
              left: 0,
              right: '-2px',
            }}
          ></div>
          <div className="hidden sm:block">
            <RiderIcon active={role === 'rider'} />
          </div>
          <div className="flex flex-col sm:mr-16 md:mr-40">
            <div
              className={cx('text-primary text-lg font-bold', {
                'opacity-50': role !== 'rider',
              })}
            >
              我是乘客
            </div>
            <div
              className={cx('text-left text-sm', {
                'text-dark-gray': role === 'rider',
                'text-gray': role !== 'rider',
              })}
            >
              我想搭車
            </div>
          </div>
          <div className="hidden sm:block">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={cx('text-lg text-primary', {
                'opacity-50': role !== 'rider',
              })}
            />
          </div>
        </button>
        <button
          className="flex items-center border-solid border-light-gray border-2 border-l-0 border-r-0 w-1/2 py-3 sm:py-5 justify-center focus:outline-none relative"
          onClick={() => {
            setRole('driver')
            const roleSwitch = document.getElementById('role-switch')
            window.scrollTo(0, roleSwitch.offsetTop)
          }}
        >
          <div
            className={cx('absolute h-1 rounded', {
              hidden: role !== 'driver',
            })}
            style={{
              backgroundColor: '#b37307',
              top: '-3px',
              left: '-3px',
              right: '0px',
            }}
          ></div>
          <div className="hidden sm:block">
            <DriverIcon active={role === 'driver'} />
          </div>
          <div className="flex flex-col sm:mr-16 md:mr-40">
            <div
              className={cx('text-secondary-dark text-lg font-bold', {
                'opacity-50': role !== 'driver',
              })}
            >
              我是駕駛
            </div>
            <div
              className={cx('text-left text-sm', {
                'text-dark-gray': role === 'driver',
                'text-gray': role !== 'driver',
              })}
            >
              我想載人
            </div>
          </div>
          <div className="hidden sm:block">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={cx('text-lg text-secondary-dark', {
                'opacity-50': role !== 'driver',
              })}
            />
          </div>
        </button>
      </div>

      <div className="relative section1">
        <div className="absolute w-auto" style={{ zIndex: -1 }}>
          <img src={bgUpImg} alt="bg" />
        </div>
        <h2 className="flex justify-center">
          <span className="text-dark-gray font-bold text-3xl mr-5">
            為什麼選擇
          </span>
          <Logo size="large" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-4/5 mx-auto mt-20 gap-16 lg:gap-0">
          <div>
            <div className="flex justify-center">
              <ValuePropIcon1 />
            </div>
            <div className="w-3/5 mx-auto mt-5">
              <h3 className="font-medium text-xl text-center text-dark-gray">
                {valueProp1Title}
              </h3>
              <p className="text-center mt-3 text-dark-gray">
                {valueProp1Desc}
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <ValuePropIcon2 />
            </div>
            <div className="w-3/5 mx-auto mt-5">
              <h3 className="font-medium text-xl text-center text-dark-gray">
                累積點數
              </h3>
              <p className="text-center mt-3 text-dark-gray">
                藉由共乘，累積點數兌換多種優惠方案
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <ValuePropIcon3 />
            </div>
            <div className="w-3/5 mx-auto mt-5">
              <h3 className="font-medium text-xl text-center text-dark-gray">
                站點固定
              </h3>
              <p className="text-center mt-3 text-dark-gray">
                服務範圍為往來中研院與捷運站，App 操作介面更簡單直覺
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 sm:mt-56 block lg:flex mx-auto relative">
        <div
          className="absolute right-0 w-auto hidden sm:block"
          style={{ top: '-135px', zIndex: -1 }}
        >
          <img src={bgDownImg} alt="bg" />
        </div>
        <div className="flex justify-center lg:block lg:ml-40 lg:mr-28 appScreen w-auto hidden lg:block">
          <img src={appScreenImg} alt="demo" />
        </div>
        <div className="mt-0 mb-6 lg:mt-16 lg:mb-0">
          <h2 className="text-dark-gray font-bold text-3xl text-center lg:text-left">
            如何使用
          </h2>
          <div className="mt-10 w-4/5 mx-auto sm:w-full sm:mx-0">
            <div className="flex justify-center lg:justify-start">
              <span
                className="text-3xl text-primary font-bold mr-6 relative"
                style={{ top: '-5px' }}
              >
                1.
              </span>
              <div>
                <h3 className="text-2xl text-dark-gray font-medium">
                  {step1Title}
                </h3>
                <p className="text-dark-gray">一些簡單的問題，幾秒鐘就能填好</p>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-center lg:justify-start w-4/5 mx-auto sm:w-full sm:mx-0">
            <span
              className="text-3xl text-primary font-bold mr-6 relative"
              style={{ top: '-5px' }}
            >
              2.
            </span>
            <div>
              <h3 className="text-2xl text-dark-gray font-medium">
                等待系統配對
              </h3>
              <p className="text-dark-gray">配對成功後，我們會發通知告訴您</p>
            </div>
          </div>
          <div className="flex mt-4 justify-center lg:justify-start w-4/5 mx-auto sm:w-full sm:mx-0">
            <span
              className="text-3xl text-primary font-bold mr-6 relative"
              style={{ top: '-5px' }}
            >
              3.
            </span>
            <div>
              <h3 className="text-2xl text-dark-gray font-medium">
                {step3Title}
              </h3>
              <p className="text-dark-gray">{step3Desc}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:block lg:ml-40 lg:mr-28 appScreen w-auto block lg:hidden">
          <img src={appScreenImg} alt="demo" className="block lg:hidden" />
        </div>
        <div className="absolute windDown hidden sm:block">
          <img src={windDownImg} alt="wind" />
        </div>
      </div>

      <div
        className="py-32 px-3 md:py-28 md:px-24 lg:py-40 lg:px-56"
        style={{
          clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0 100%)',
          backgroundColor: '#fbfbfb',
        }}
      >
        <h2 className="text-3xl sm:text-4xl text-dark-gray font-bold">
          準備好試試不一樣的交通方式了嗎？
          <br />
          我們都在等你！
        </h2>
        <div className="flex items-center mt-10">
          <IosDownloadLink styles="mr-1 sm:mr-4" />
          <AndroidDownloadLink />
        </div>
      </div>

      <div className="flex justify-end items-center mt-8 mb-0">
        <Logo />
        <a href="/" className="ml-3 text-dark-gray">
          關於我們
        </a>
        <a href="mailto:" className="ml-3 text-dark-gray">
          聯絡我們
        </a>
      </div>
      <div className="text-gray text-right">© 2020 AS 共乘</div>
      <div className="text-gray text-right mb-2">
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </MainLayout>
  )
}

export default Index
