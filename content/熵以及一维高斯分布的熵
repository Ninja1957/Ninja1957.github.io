---
title: 熵以及一维高斯分布的熵
category: 数学
date: 2026-09-09
tags: 概率论
summary: 
demo: true
---

#### 1、“熵”     **Shannon Entropy（香农熵）**
一般含义是指：结果越难预测，熵越大；结果越确定，熵越小。
熵=不确定性=平均信息量

数学表达式：
${I(X)=-log_2(p_x)}$   是当前事件的信息量
${I(x)*P_x}$    是当前事件对整个熵的贡献，由于概率出现的可能性比较低，即使信息含量高对整体贡献也不是太大
${H(X) = -\sum(I(x)*P_x)}$

即所以事件发生的概率以及他的对数的乘积 的和，就能够实现越小概率出现的事件出现后带来的信息越多。
比如一件事100%发生，他的I(x)=0，就没有任何信息量
换个例子，如果抛硬币，任何一个概率都是50%，那么I（X）= -(log(0.5)) = 1，可以带来1bit的信息
假如硬币竖起来的概率是1/1024，那么他的I(X)=-*log(1/1024)=10，信息量就是10bit

#### 2、高斯分布（正态分布）
整个分布符合： $X∼N(μ,σ2)$
概率密度函数是：${P(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \qquad -\infty<x<\infty,\quad \sigma>0.)}$
![[Pasted image 20260906232653.png|569]]


#### 3、一维高斯分布的熵
已知熵的定义，以及高斯分布的密度函数。
那么针对连续的分布中，熵的计算表达式如下：
${h(x) = \int_{-\infty}^{+\infty} P(x)ln(P(x)) \,dx}$，
	注意这里的熵的计算从2为底的log变为了ln，因为重点看相对数据的离散，所以这里换底其实无所谓，正常在信息论里用2为底可以表示出信息bit含量，这里用e为底更方便计算
展开：
${h(x)=(-1)\int_{-\infty}^{+\infty} P(x)ln(\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}) \,dx}$
针对ln那一坨先单独展开
$ln(\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}})=-\frac{1}{2}(ln(2\pi\sigma^2 + \frac{(x-\mu)^2}{\sigma^2}))$
则原式为
${h(x)= (\frac{1}{2})\int_{-\infty}^{+\infty} P(x)[ln(2\pi\sigma^2 + \frac{(x-\mu)^2}{\sigma^2})] \,dx}$
    ${= (\frac{1}{2})[\int_{-\infty}^{+\infty} P(x) ln(2\pi\sigma^2) \,dx + \int_{-\infty}^{+\infty} P(x)\frac{(x-\mu)^2}{\sigma^2})] \,dx]}$
    ${= (\frac{1}{2})[ln(2\pi\sigma^2)\int_{-\infty}^{+\infty} P(x)\,dx + \frac{1}{\sigma^2}\int_{-\infty}^{+\infty} P(x){(x-\mu)^2})] \,dx]}$
引入高斯分布两个公式（我觉得在这里引入得非常巧妙）：
$\int_{-\infty}^{+\infty} P(x)\,dx=1$
$\int_{-\infty}^{+\infty} P(x){(x-\mu)^2})] \,dx=\sigma^2$，（这里就是方差的定义，但是从离散变成连续一下真看不出来）
代入可得：
	$=(\frac{1}{2})[ln(2\pi\sigma^2) + \frac{1}{\sigma^2}\sigma^2]$
	$=(\frac{1}{2})[ln(2\pi\sigma^2) + 1]$
	$=(\frac{1}{2})[ln(2e\pi\sigma^2)]$

至此大功告成！
