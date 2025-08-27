# 复杂数学公式测试文档 - Complex Mathematical Formulas Test

本文档包含 200 个复杂数学公式，主要涵盖核反应堆中子输运、湍流求解等领域，用于测试 Markdown 公式解析能力。

## 1. 核反应堆中子输运方程 (Neutron Transport Equations)

### 1.1 基础输运方程

$$\frac{1}{v}\frac{\partial \phi(r,E,\Omega,t)}{\partial t} + \Omega \cdot \nabla \phi(r,E,\Omega,t) + \Sigma_t(r,E,t)\phi(r,E,\Omega,t) = \int_0^\infty dE' \int_{4\pi} d\Omega' \Sigma_s(r,E'\to E,\Omega'\to\Omega,t)\phi(r,E',\Omega',t) + \frac{\chi(E)}{4\pi}\int_0^\infty dE' \nu\Sigma_f(r,E',t)\phi(r,E',t) + S(r,E,\Omega,t)$$

$$\nabla^2 \phi - \frac{1}{L^2}\phi + \frac{\nu\Sigma_f}{D}\phi = 0$$

$$k_{eff} = \frac{\text{中子产生率}}{\text{中子吸收率}} = \frac{\int_V \int_0^\infty \nu\Sigma_f(r,E)\phi(r,E)dE dV}{\int_V \int_0^\infty \Sigma_a(r,E)\phi(r,E)dE dV}$$

$$\frac{\partial}{\partial t}\begin{pmatrix} \phi_1 \\ \phi_2 \end{pmatrix} = \begin{pmatrix} -\frac{D_1\nabla^2 - \Sigma_{a1} - \Sigma_{12}}{\nu_1} & \frac{\nu_2\Sigma_{f2}}{\nu_1} \\ \frac{\Sigma_{12}}{\nu_2} & -\frac{D_2\nabla^2 - \Sigma_{a2}}{\nu_2} \end{pmatrix}\begin{pmatrix} \phi_1 \\ \phi_2 \end{pmatrix}$$

$$P_1(\mu) = \frac{3}{2}\left[\phi_0(r,E,t) + 3\mu\phi_1(r,E,t)\right]$$

### 1.2 六因子公式

$$k_\infty = \eta \cdot f \cdot p \cdot \varepsilon = \frac{\nu\Sigma_f}{\Sigma_a} \cdot \frac{\Sigma_a^{fuel}}{\Sigma_a^{total}} \cdot \frac{\Sigma_a^{thermal}}{\Sigma_a^{total}} \cdot \frac{\text{快中子产生}}{\text{热中子吸收}}$$

$$k_{eff} = k_\infty \cdot P_{NL} = k_\infty \cdot \frac{1}{1 + B^2L^2}$$

$$B^2 = \frac{\pi^2}{H^2} + \frac{\pi^2}{R^2} + \frac{\pi^2}{D^2}$$

$$\rho = \frac{k_{eff} - 1}{k_{eff}} = \frac{\Delta k}{k}$$

$$\frac{d\rho}{dt} = \frac{\Lambda}{\beta_{eff}}\frac{dn}{dt} + \sum_{i=1}^6 \frac{\beta_i}{\beta_{eff}}\frac{dC_i}{dt}$$

### 1.3 延迟中子动力学

$$\frac{dn}{dt} = \frac{\rho - \beta}{\Lambda}n + \sum_{i=1}^6 \lambda_i C_i$$

$$\frac{dC_i}{dt} = \frac{\beta_i}{\Lambda}n - \lambda_i C_i, \quad i = 1,2,...,6$$

$$G(s) = \frac{n(s)}{n_0} = \frac{1}{s - \frac{\rho - \beta}{\Lambda} - \sum_{i=1}^6 \frac{\beta_i \lambda_i}{\Lambda(s + \lambda_i)}}$$

$$\omega = \sqrt{\frac{\rho - \beta}{\Lambda} \cdot \sum_{i=1}^6 \frac{\beta_i \lambda_i}{\lambda_i^2}}$$

$$T = \frac{\Lambda}{\rho - \beta} + \sum_{i=1}^6 \frac{\beta_i}{(\rho - \beta)\lambda_i}$$

### 1.4 中子能谱方程

$$\phi(E) = \frac{\chi(E)}{\Sigma_t(E) - \Sigma_s(E)} \int_E^\infty \frac{\Sigma_s(E' \to E)}{E'}\phi(E')dE' + \frac{S(E)}{\Sigma_t(E) - \Sigma_s(E)}$$

$$f(E) = \frac{1}{\sqrt{\pi}}\frac{1}{(kT)^{3/2}}E^{1/2}e^{-E/kT}$$

$$\phi_{epi}(E) = \frac{C}{E} \quad \text{for } E_{th} < E < E_{fast}$$

$$\phi_{fast}(E) = Ce^{-E/T} \sinh\sqrt{2ET}$$

$$\Sigma_s(E' \to E) = \frac{\Sigma_s(E')}{(1-\alpha)E'} \quad \text{for } \alpha E' \leq E \leq E'$$

## 2. 湍流理论与求解 (Turbulence Theory and Solutions)

### 2.1 Navier-Stokes 方程

$$\frac{\partial u_i}{\partial t} + u_j\frac{\partial u_i}{\partial x_j} = -\frac{1}{\rho}\frac{\partial p}{\partial x_i} + \nu\frac{\partial^2 u_i}{\partial x_j^2} + f_i$$

$$\frac{\partial}{\partial t}(\rho u_i) + \frac{\partial}{\partial x_j}(\rho u_i u_j) = -\frac{\partial p}{\partial x_i} + \frac{\partial \tau_{ij}}{\partial x_j} + \rho f_i$$

$$\tau_{ij} = \mu\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right) - \frac{2}{3}\mu\frac{\partial u_k}{\partial x_k}\delta_{ij}$$

$$\frac{D\rho}{Dt} + \rho\frac{\partial u_i}{\partial x_i} = 0$$

$$\frac{\partial \rho}{\partial t} + \frac{\partial}{\partial x_i}(\rho u_i) = 0$$

### 2.2 Reynolds 平均湍流模型

$$\frac{\partial \bar{u}_i}{\partial t} + \bar{u}_j\frac{\partial \bar{u}_i}{\partial x_j} = -\frac{1}{\rho}\frac{\partial \bar{p}}{\partial x_i} + \nu\frac{\partial^2 \bar{u}_i}{\partial x_j^2} - \frac{\partial}{\partial x_j}\overline{u'_i u'_j}$$

$$-\overline{u'_i u'_j} = \nu_t\left(\frac{\partial \bar{u}_i}{\partial x_j} + \frac{\partial \bar{u}_j}{\partial x_i}\right) - \frac{2}{3}k\delta_{ij}$$

$$\nu_t = C_\mu \frac{k^2}{\varepsilon}$$

$$\frac{\partial k}{\partial t} + \bar{u}_j\frac{\partial k}{\partial x_j} = P_k - \varepsilon + \frac{\partial}{\partial x_j}\left[\left(\nu + \frac{\nu_t}{\sigma_k}\right)\frac{\partial k}{\partial x_j}\right]$$

$$\frac{\partial \varepsilon}{\partial t} + \bar{u}_j\frac{\partial \varepsilon}{\partial x_j} = C_{1\varepsilon}\frac{\varepsilon}{k}P_k - C_{2\varepsilon}\frac{\varepsilon^2}{k} + \frac{\partial}{\partial x_j}\left[\left(\nu + \frac{\nu_t}{\sigma_\varepsilon}\right)\frac{\partial \varepsilon}{\partial x_j}\right]$$

### 2.3 大涡模拟 (LES)

$$\frac{\partial \bar{u}_i}{\partial t} + \frac{\partial}{\partial x_j}(\bar{u}_i \bar{u}_j) = -\frac{1}{\rho}\frac{\partial \bar{p}}{\partial x_i} + \nu\frac{\partial^2 \bar{u}_i}{\partial x_j^2} - \frac{\partial \tau_{ij}}{\partial x_j}$$

$$\tau_{ij} = \overline{u_i u_j} - \bar{u}_i \bar{u}_j$$

$$\tau_{ij} - \frac{1}{3}\tau_{kk}\delta_{ij} = -2\nu_t S_{ij}$$

$$\nu_t = (C_s \Delta)^2 |S|$$

$$|S| = \sqrt{2S_{ij}S_{ij}}, \quad S_{ij} = \frac{1}{2}\left(\frac{\partial \bar{u}_i}{\partial x_j} + \frac{\partial \bar{u}_j}{\partial x_i}\right)$$

### 2.4 湍流能量级联

$$E(k) = C\varepsilon^{2/3}k^{-5/3}$$

$$\varepsilon = \nu \sum_{i,j} \overline{\left(\frac{\partial u'_i}{\partial x_j}\right)^2}$$

$$\frac{\partial E}{\partial t} + T(k) = -2\nu k^2 E(k)$$

$$T(k) = \int_0^k T(k',k)dk' - \int_k^\infty T(k,k')dk'$$

$$\eta = \left(\frac{\nu^3}{\varepsilon}\right)^{1/4}$$

## 3. 流体动力学高级方程 (Advanced Fluid Dynamics)

### 3.1 可压缩流动

$$\frac{\partial \rho}{\partial t} + \frac{\partial}{\partial x_j}(\rho u_j) = 0$$

$$\frac{\partial}{\partial t}(\rho u_i) + \frac{\partial}{\partial x_j}(\rho u_i u_j + p\delta_{ij}) = \frac{\partial \tau_{ij}}{\partial x_j}$$

$$\frac{\partial}{\partial t}(\rho E) + \frac{\partial}{\partial x_j}[(\rho E + p)u_j] = \frac{\partial}{\partial x_j}(\tau_{ij}u_i - q_j)$$

$$p = \rho R T, \quad E = c_v T + \frac{1}{2}u_i u_i$$

$$Ma = \frac{U}{c} = \frac{U}{\sqrt{\gamma R T}}$$

### 3.2 激波关系式

$$\frac{\rho_2}{\rho_1} = \frac{(\gamma + 1)Ma_1^2}{(\gamma - 1)Ma_1^2 + 2}$$

$$\frac{p_2}{p_1} = \frac{2\gamma Ma_1^2 - (\gamma - 1)}{\gamma + 1}$$

$$\frac{T_2}{T_1} = \frac{[2\gamma Ma_1^2 - (\gamma - 1)][(\gamma - 1)Ma_1^2 + 2]}{(\gamma + 1)^2 Ma_1^2}$$

$$Ma_2^2 = \frac{Ma_1^2 + \frac{2}{\gamma - 1}}{2\frac{\gamma}{\gamma - 1}Ma_1^2 - 1}$$

$$\Delta s = c_p \ln\left(\frac{T_2}{T_1}\right) - R\ln\left(\frac{p_2}{p_1}\right)$$

### 3.3 边界层理论

$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$$

$$u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} = U\frac{dU}{dx} + \nu\frac{\partial^2 u}{\partial y^2}$$

$$\delta(x) = \sqrt{\frac{\nu x}{U}}$$

$$\theta = \int_0^\infty \frac{u}{U}\left(1 - \frac{u}{U}\right)dy$$

$$H = \frac{\delta^*}{\theta}, \quad \delta^* = \int_0^\infty \left(1 - \frac{u}{U}\right)dy$$

### 3.4 传热传质方程

$$\frac{\partial T}{\partial t} + u_j\frac{\partial T}{\partial x_j} = \alpha\frac{\partial^2 T}{\partial x_j^2} + \frac{\Phi}{\rho c_p}$$

$$Nu = \frac{hL}{k} = f(Re, Pr)$$

$$Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}$$

$$\frac{\partial C}{\partial t} + u_j\frac{\partial C}{\partial x_j} = D\frac{\partial^2 C}{\partial x_j^2} + S_C$$

$$Sh = \frac{k_m L}{D} = f(Re, Sc)$$

## 4. 量子力学与统计力学 (Quantum and Statistical Mechanics)

### 4.1 薛定谔方程

$$i\hbar\frac{\partial \Psi}{\partial t} = \hat{H}\Psi$$

$$\hat{H}\Psi = E\Psi$$

$$\Psi(x,t) = \sum_n c_n \psi_n(x)e^{-iE_n t/\hbar}$$

$$\langle x \rangle = \int_{-\infty}^{\infty} \Psi^*(x,t) \cdot x \cdot \Psi(x,t) dx$$

$$[\hat{x}, \hat{p}] = i\hbar$$

### 4.2 多体量子系统

$$\hat{H} = \sum_{i=1}^N \frac{\hat{p}_i^2}{2m} + \sum_{i<j} V_{ij}$$

$$\Psi(x_1, x_2, ..., x_N) = \frac{1}{\sqrt{N!}}\sum_P (-1)^P \prod_{i=1}^N \psi_{n_i}(x_{P(i)})$$

$$\langle \hat{A} \rangle = \frac{\text{Tr}(\hat{\rho}\hat{A})}{\text{Tr}(\hat{\rho})}$$

$$\hat{\rho} = \frac{e^{-\beta\hat{H}}}{Z}, \quad Z = \text{Tr}(e^{-\beta\hat{H}})$$

$$F = -k_B T \ln Z$$

### 4.3 费米-狄拉克统计

$$f(E) = \frac{1}{e^{(E-\mu)/k_B T} + 1}$$

$$n = \int_0^\infty g(E)f(E)dE$$

$$g(E) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}E^{1/2}$$

$$\mu = k_B T \ln\left(\frac{n}{2}\left(\frac{2\pi\hbar^2}{mk_B T}\right)^{3/2}\right)$$

$$P = \frac{2}{5}nE_F$$

## 5. 电磁场理论 (Electromagnetic Field Theory)

### 5.1 麦克斯韦方程组

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$

$$\nabla \cdot \mathbf{B} = 0$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

$$\nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}$$

$$\frac{\partial^2 \mathbf{E}}{\partial t^2} - c^2\nabla^2\mathbf{E} = \frac{1}{\varepsilon_0}\frac{\partial \mathbf{J}}{\partial t} + \frac{1}{\varepsilon_0}\nabla\rho$$

### 5.2 电磁波传播

$$\mathbf{E}(\mathbf{r},t) = \mathbf{E}_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)}$$

$$\omega^2 = c^2|\mathbf{k}|^2$$

$$\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$$

$$u = \frac{1}{2}\left(\varepsilon_0|\mathbf{E}|^2 + \frac{1}{\mu_0}|\mathbf{B}|^2\right)$$

$$\frac{\partial u}{\partial t} + \nabla \cdot \mathbf{S} = -\mathbf{J} \cdot \mathbf{E}$$

### 5.3 等离子体物理

$$\frac{\partial n_e}{\partial t} + \nabla \cdot (n_e \mathbf{v}_e) = S_e$$

$$m_e n_e\left(\frac{\partial \mathbf{v}_e}{\partial t} + \mathbf{v}_e \cdot \nabla\mathbf{v}_e\right) = -en_e(\mathbf{E} + \mathbf{v}_e \times \mathbf{B}) - \nabla p_e$$

$$\omega_{pe} = \sqrt{\frac{n_e e^2}{\varepsilon_0 m_e}}$$

$$r_D = \sqrt{\frac{\varepsilon_0 k_B T_e}{n_e e^2}}$$

$$\sigma = \frac{n_e e^2}{m_e \nu_{ei}}$$

## 6. 非线性动力学 (Nonlinear Dynamics)

### 6.1 混沌系统

$$\frac{dx}{dt} = \sigma(y - x)$$
$$\frac{dy}{dt} = x(\rho - z) - y$$
$$\frac{dz}{dt} = xy - \beta z$$

$$\lambda = \lim_{t \to \infty} \frac{1}{t}\ln\left|\frac{\partial x(t)}{\partial x_0}\right|$$

$$D = \lim_{\varepsilon \to 0} \frac{\ln N(\varepsilon)}{\ln(1/\varepsilon)}$$

$$H = -\sum_i p_i \ln p_i$$

$$x_{n+1} = rx_n(1 - x_n)$$

### 6.2 孤立波方程

$$\frac{\partial u}{\partial t} + 6u\frac{\partial u}{\partial x} + \frac{\partial^3 u}{\partial x^3} = 0$$

$$u(x,t) = \frac{c}{2}\text{sech}^2\left(\frac{\sqrt{c}}{2}(x - ct - x_0)\right)$$

$$\frac{\partial u}{\partial t} - 6u\frac{\partial u}{\partial x} + \frac{\partial^3 u}{\partial x^3} = 0$$

$$u(x,t) = -\frac{c}{2}\text{sech}^2\left(\frac{\sqrt{c}}{2}(x + ct - x_0)\right)$$

$$\frac{\partial^2 u}{\partial t^2} - \frac{\partial^2 u}{\partial x^2} + \sin u = 0$$

## 7. 偏微分方程数值解法 (Numerical PDE Solutions)

### 7.1 有限差分方法

$$\frac{\partial u}{\partial t} = D\frac{\partial^2 u}{\partial x^2}$$

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = D\frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{(\Delta x)^2}$$

$$u_i^{n+1} = u_i^n + r(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$$

$$r = \frac{D\Delta t}{(\Delta x)^2} \leq \frac{1}{2}$$

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = D\frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{(\Delta x)^2}$$

### 7.2 有限元方法

$$\int_\Omega \left(\frac{\partial u}{\partial t}v + D\nabla u \cdot \nabla v\right)d\Omega = \int_\Omega fv d\Omega + \int_{\partial\Omega} gv d\Gamma$$

$$u^h(x,t) = \sum_{j=1}^N U_j(t)N_j(x)$$

$$\mathbf{M}\frac{d\mathbf{U}}{dt} + \mathbf{K}\mathbf{U} = \mathbf{F}$$

$$M_{ij} = \int_\Omega N_i N_j d\Omega$$

$$K_{ij} = \int_\Omega D\nabla N_i \cdot \nabla N_j d\Omega$$

### 7.3 谱方法

$$u(x,t) = \sum_{n=0}^N a_n(t)\phi_n(x)$$

$$\frac{da_n}{dt} = \sum_{m=0}^N L_{nm}a_m$$

$$\phi_n(x) = \cos(n\arccos x), \quad x \in [-1,1]$$

$$u_N(x) = \sum_{n=0}^N a_n T_n(x)$$

$$a_n = \frac{2}{\pi c_n}\int_{-1}^1 \frac{u(x)T_n(x)}{\sqrt{1-x^2}}dx$$

## 8. 统计物理与热力学 (Statistical Physics and Thermodynamics)

### 8.1 玻尔兹曼分布

$$P(E) = \frac{1}{Z}e^{-E/k_B T}$$

$$Z = \sum_i e^{-E_i/k_B T}$$

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}$$

$$S = k_B \ln \Omega$$

$$F = E - TS = -k_B T \ln Z$$

### 8.2 相变理论

$$G = H - TS$$

$$\frac{\partial G}{\partial T} = -S, \quad \frac{\partial G}{\partial p} = V$$

$$\frac{\partial^2 G}{\partial T^2} = -\frac{C_p}{T}$$

$$M = \frac{\partial F}{\partial H}$$

$$\chi = \frac{\partial M}{\partial H} = \frac{\beta}{N}\langle M^2 \rangle - \beta\langle M \rangle^2$$

### 8.3 临界现象

$$\xi = \xi_0 |t|^{-\nu}$$

$$C \propto |t|^{-\alpha}$$

$$M \propto |t|^{\beta}$$

$$\chi \propto |t|^{-\gamma}$$

$$t = \frac{T - T_c}{T_c}$$

## 9. 量子场论基础 (Quantum Field Theory Basics)

### 9.1 Klein-Gordon 方程

$$\left(\frac{\partial^2}{\partial t^2} - \nabla^2 + m^2c^2/\hbar^2\right)\phi = 0$$

$$\phi(x) = \int \frac{d^3k}{(2\pi)^3}\frac{1}{\sqrt{2E_k}}\left[a(\mathbf{k})e^{-ik \cdot x} + b^\dagger(\mathbf{k})e^{ik \cdot x}\right]$$

$$E_k = \sqrt{|\mathbf{k}|^2c^2 + m^2c^4}$$

$$[a(\mathbf{k}), a^\dagger(\mathbf{k}')] = (2\pi)^3\delta^3(\mathbf{k} - \mathbf{k}')$$

$$\mathcal{L} = \frac{1}{2}\partial_\mu\phi\partial^\mu\phi - \frac{1}{2}m^2\phi^2$$

### 9.2 狄拉克方程

$$(i\gamma^\mu\partial_\mu - m)\psi = 0$$

$$\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}$$

$$\psi(x) = \int \frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_p}}\sum_{s=1,2}\left[u^s(\mathbf{p})a_s(\mathbf{p})e^{-ip \cdot x} + v^s(\mathbf{p})b_s^\dagger(\mathbf{p})e^{ip \cdot x}\right]$$

$$\bar{\psi} = \psi^\dagger\gamma^0$$

$$\mathcal{L} = \bar{\psi}(i\gamma^\mu\partial_\mu - m)\psi$$

### 9.3 规范场论

$$D_\mu = \partial_\mu - ieA_\mu$$

$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

$$\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} + \bar{\psi}(i\gamma^\mu D_\mu - m)\psi$$

$$A_\mu \to A_\mu + \frac{1}{e}\partial_\mu\alpha$$

$$\psi \to e^{i\alpha}\psi$$

## 10. 广义相对论 (General Relativity)

### 10.1 爱因斯坦场方程

$$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

$$R_{\mu\nu} = \partial_\lambda\Gamma^\lambda_{\mu\nu} - \partial_\nu\Gamma^\lambda_{\mu\lambda} + \Gamma^\lambda_{\lambda\rho}\Gamma^\rho_{\mu\nu} - \Gamma^\lambda_{\nu\rho}\Gamma^\rho_{\mu\lambda}$$

$$\Gamma^\lambda_{\mu\nu} = \frac{1}{2}g^{\lambda\rho}(\partial_\mu g_{\rho\nu} + \partial_\nu g_{\rho\mu} - \partial_\rho g_{\mu\nu})$$

$$ds^2 = -c^2dt^2 + a(t)^2\left[\frac{dr^2}{1-kr^2} + r^2(d\theta^2 + \sin^2\theta d\phi^2)\right]$$

$$H = \frac{\dot{a}}{a}$$

### 10.2 黑洞物理

$$ds^2 = -\left(1 - \frac{2GM}{c^2r}\right)c^2dt^2 + \frac{dr^2}{1 - \frac{2GM}{c^2r}} + r^2(d\theta^2 + \sin^2\theta d\phi^2)$$

$$r_s = \frac{2GM}{c^2}$$

$$T_H = \frac{\hbar c^3}{8\pi Gk_B M}$$

$$S_{BH} = \frac{k_B c^3 A}{4G\hbar}$$

$$\frac{dM}{dt} = -\frac{\hbar c^6}{15360\pi G^2 M^2}$$

## 11. 高能物理标准模型 (Standard Model of Particle Physics)

### 11.1 电弱理论

$$\mathcal{L}_{EW} = \bar{\psi}_L\gamma^\mu i D_\mu \psi_L + \bar{\psi}_R\gamma^\mu i D_\mu \psi_R - \frac{1}{4}W_{\mu\nu}^a W^{a\mu\nu} - \frac{1}{4}B_{\mu\nu}B^{\mu\nu}$$

$$D_\mu = \partial_\mu - ig\frac{\sigma^a}{2}W_\mu^a - ig'\frac{Y}{2}B_\mu$$

$$m_W = \frac{gv}{2}, \quad m_Z = \frac{v\sqrt{g^2 + g'^2}}{2}$$

$$\sin^2\theta_W = \frac{g'^2}{g^2 + g'^2}$$

$$\alpha = \frac{g^2\sin^2\theta_W}{4\pi} = \frac{e^2}{4\pi\varepsilon_0\hbar c}$$

### 11.2 量子色动力学

$$\mathcal{L}_{QCD} = \sum_{q} \bar{q}(i\gamma^\mu D_\mu - m_q)q - \frac{1}{4}G_{\mu\nu}^a G^{a\mu\nu}$$

$$D_\mu = \partial_\mu - ig_s\frac{\lambda^a}{2}G_\mu^a$$

$$G_{\mu\nu}^a = \partial_\mu G_\nu^a - \partial_\nu G_\mu^a + g_s f^{abc}G_\mu^b G_\nu^c$$

$$\beta(g) = \frac{\partial g}{\partial \ln\mu} = -b_0 g^3 - b_1 g^5 + ...$$

$$\alpha_s(\mu^2) = \frac{\alpha_s(\mu_0^2)}{1 + \frac{\alpha_s(\mu_0^2)}{4\pi}b_0\ln(\mu^2/\mu_0^2)}$$

### 11.3 希格斯机制

$$\mathcal{L}_H = (D_\mu H)^\dagger(D^\mu H) - V(H)$$

$$V(H) = \mu^2 H^\dagger H + \lambda(H^\dagger H)^2$$

$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ v + h \end{pmatrix}$$

$$m_h^2 = 2\lambda v^2$$

$$m_f = \frac{y_f v}{\sqrt{2}}$$

## 12. 凝聚态物理 (Condensed Matter Physics)

### 12.1 能带理论

$$H\psi_{n\mathbf{k}} = E_n(\mathbf{k})\psi_{n\mathbf{k}}$$

$$\psi_{n\mathbf{k}}(\mathbf{r}) = u_{n\mathbf{k}}(\mathbf{r})e^{i\mathbf{k} \cdot \mathbf{r}}$$

$$u_{n\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$$

$$E_n(\mathbf{k} + \mathbf{G}) = E_n(\mathbf{k})$$

$$\mathbf{v}_n(\mathbf{k}) = \frac{1}{\hbar}\nabla_\mathbf{k}E_n(\mathbf{k})$$

### 12.2 超导理论

$$\Delta(\mathbf{k}) = \sum_{\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'}\frac{\Delta(\mathbf{k}')}{2E_{\mathbf{k}'}}$$

$$E_\mathbf{k} = \sqrt{\xi_\mathbf{k}^2 + |\Delta(\mathbf{k})|^2}$$

$$\xi_\mathbf{k} = \varepsilon_\mathbf{k} - \mu$$

$$T_c = 1.14\hbar\omega_D e^{-1/N(0)V}$$

$$\frac{\Delta(T)}{\Delta(0)} = \tanh\left(\frac{1.74\sqrt{T_c/T - 1}}{1}\right)$$

### 12.3 磁性理论

$$H = -J\sum_{\langle i,j \rangle} \mathbf{S}_i \cdot \mathbf{S}_j - h\sum_i S_i^z$$

$$\langle S^z \rangle = \frac{1}{2}\tanh\left(\frac{\beta}{2}(zJ\langle S^z \rangle + h)\right)$$

$$T_c = \frac{zJS(S+1)}{3k_B}$$

$$\chi = \frac{Ng^2\mu_B^2 S(S+1)}{3k_B(T - \theta)}$$

$$\theta = \frac{zJS(S+1)}{3k_B}$$

## 13. 原子分子物理 (Atomic and Molecular Physics)

### 13.1 氢原子

$$\left[-\frac{\hbar^2}{2m}\nabla^2 - \frac{ke^2}{r}\right]\psi = E\psi$$

$$E_n = -\frac{me^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}$$

$$\psi_{nlm}(r,\theta,\phi) = R_{nl}(r)Y_l^m(\theta,\phi)$$

$$R_{nl}(r) = \sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-l-1)!}{2n[(n+l)!]}}e^{-r/na_0}\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{(2l+1)}\left(\frac{2r}{na_0}\right)$$

$$a_0 = \frac{4\pi\varepsilon_0\hbar^2}{me^2} = 0.529 \text{ Å}$$

### 13.2 分子轨道理论

$$\psi = c_1\phi_A + c_2\phi_B$$

$$\left|\begin{matrix} H_{AA} - ES_{AA} & H_{AB} - ES_{AB} \\ H_{BA} - ES_{BA} & H_{BB} - ES_{BB} \end{matrix}\right| = 0$$

$$E_\pm = \frac{H_{AA} + H_{BB} \pm \sqrt{(H_{AA} - H_{BB})^2 + 4H_{AB}^2}}{2}$$

$$\psi_\pm = \frac{\phi_A \pm \phi_B}{\sqrt{2 \pm 2S_{AB}}}$$

$$H_{eff} = -t\sum_{\langle i,j \rangle} (c_i^\dagger c_j + c_j^\dagger c_i) + U\sum_i n_{i\uparrow}n_{i\downarrow}$$

### 13.3 光谱学

$$A_{21} = \frac{64\pi^4\nu^3}{3hc^3}|\langle 1|d|2 \rangle|^2$$

$$I(\nu) = I_0 \exp\left(-\int_0^l n\sigma(\nu) dl\right)$$

$$\sigma(\nu) = \frac{\pi e^2}{mc}\frac{f_{12}\gamma/2\pi}{(\nu - \nu_{12})^2 + (\gamma/2)^2}$$

$$f_{12} = \frac{2m\omega_{12}}{3\hbar}|\langle 1|x|2 \rangle|^2$$

$$\Delta E = \mu_B g J B$$

## 14. 计算物理方法 (Computational Physics Methods)

### 14.1 蒙特卡罗方法

$$\langle A \rangle = \frac{1}{Z}\sum_{\{s\}} A(\{s\})e^{-\beta H(\{s\})}$$

$$P(s_i \to s_j) = \min\left(1, e^{-\beta(E_j - E_i)}\right)$$

$$\langle A \rangle \approx \frac{1}{N}\sum_{i=1}^N A(x_i)$$

$$\sigma^2 = \langle A^2 \rangle - \langle A \rangle^2$$

$$\tau = 1 + 2\sum_{t=1}^{\infty} \rho(t)$$

### 14.2 分子动力学

$$F_i = -\nabla_i U$$

$$m_i \frac{d^2 r_i}{dt^2} = F_i$$

$$r_i(t + \Delta t) = r_i(t) + v_i(t)\Delta t + \frac{1}{2}a_i(t)(\Delta t)^2$$

$$v_i(t + \Delta t) = v_i(t) + \frac{1}{2}[a_i(t) + a_i(t + \Delta t)]\Delta t$$

$$T = \frac{1}{3N k_B}\sum_{i=1}^N m_i v_i^2$$

### 14.3 密度泛函理论

$$E[\rho] = T[\rho] + V_{ext}[\rho] + V_{ee}[\rho]$$

$$E[\rho] = \int \rho(\mathbf{r})v_{ext}(\mathbf{r})d\mathbf{r} + F[\rho]$$

$$\frac{\delta E[\rho]}{\delta \rho} = \mu$$

$$\left[-\frac{1}{2}\nabla^2 + v_{eff}(\mathbf{r})\right]\psi_i(\mathbf{r}) = \varepsilon_i\psi_i(\mathbf{r})$$

$$v_{eff}(\mathbf{r}) = v_{ext}(\mathbf{r}) + v_H(\mathbf{r}) + v_{xc}(\mathbf{r})$$

## 15. 天体物理学 (Astrophysics)

### 15.1 恒星结构

$$\frac{dP}{dr} = -\frac{GM(r)\rho(r)}{r^2}$$

$$\frac{dM}{dr} = 4\pi r^2 \rho(r)$$

$$\frac{dL}{dr} = 4\pi r^2 \rho(r) \varepsilon(r)$$

$$\frac{dT}{dr} = -\frac{3\kappa(r)\rho(r)L(r)}{64\pi\sigma r^2 T^3}$$

$$P = \frac{\rho k_B T}{\mu m_H}$$

### 15.2 核合成

$$^1H + ^1H \to ^2H + e^+ + \nu_e$$

$$^2H + ^1H \to ^3He + \gamma$$

$$^3He + ^3He \to ^4He + 2^1H$$

$$\varepsilon_{pp} = \varepsilon_0 \rho^2 X^2 T^4$$

$$3^4He \to ^{12}C + \gamma$$

### 15.3 宇宙学

$$H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}(\rho + 3P/c^2) + \frac{\Lambda c^2}{3}$$

$$\Omega_m + \Omega_\Lambda + \Omega_k = 1$$

$$z = \frac{\lambda_{obs} - \lambda_{emit}}{\lambda_{emit}} = \frac{a_0}{a(t_{emit})} - 1$$

$$d_L = (1 + z)d_A$$

---

## 总结 (Summary)

本文档包含了 200 个复杂的数学公式，涵盖了以下主要领域：

1. **核反应堆中子输运方程** - 包括基础输运方程、六因子公式、延迟中子动力学等
2. **湍流理论与求解** - Navier-Stokes 方程、Reynolds 平均、大涡模拟等
3. **流体动力学高级方程** - 可压缩流动、激波关系、边界层理论等
4. **量子力学与统计力学** - 薛定谔方程、多体系统、费米-狄拉克统计等
5. **电磁场理论** - 麦克斯韦方程组、电磁波传播、等离子体物理等
6. **非线性动力学** - 混沌系统、孤立波方程等
7. **偏微分方程数值解法** - 有限差分、有限元、谱方法等
8. **统计物理与热力学** - 玻尔兹曼分布、相变理论、临界现象等
9. **量子场论基础** - Klein-Gordon 方程、狄拉克方程、规范场论等
10. **广义相对论** - 爱因斯坦场方程、黑洞物理等
11. **高能物理标准模型** - 电弱理论、量子色动力学、希格斯机制等
12. **凝聚态物理** - 能带理论、超导理论、磁性理论等
13. **原子分子物理** - 氢原子、分子轨道理论、光谱学等
14. **计算物理方法** - 蒙特卡罗方法、分子动力学、密度泛函理论等
15. **天体物理学** - 恒星结构、核合成、宇宙学等

这些公式可以全面测试 Markdown 编辑器的 LaTeX 数学公式渲染能力，包括复杂的积分、求和、矩阵、偏微分方程等各种数学符号和结构。
