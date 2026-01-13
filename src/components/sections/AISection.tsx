import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  MessageSquare, 
  FileSearch, 
  Calculator,
  BookOpen,
  Zap,
  Users,
  Sparkles
} from "lucide-react";

const solutions = [
  {
    icon: BookOpen,
    title: "AI知识培训",
    desc: "帮助企业建立行业知识库、业务术语标准定义、业务流程规范",
    highlight: "知识赋能"
  },
  {
    icon: Bot,
    title: "数字员工搭建",
    desc: "构建公司级的智能助手，标准化业务流程，提升团队协作效率",
    highlight: "效率提升"
  },
  {
    icon: MessageSquare,
    title: "智能客服机器人",
    desc: "基于大模型+公司知识库+定制接口，7×24小时在线解答客户问题",
    highlight: "全天候服务"
  },
  {
    icon: Calculator,
    title: "询报价机器人",
    desc: "搭建内部运价管理系统和群询报价机器人，提高销售商务协同效率50%",
    highlight: "效率+50%"
  },
  {
    icon: FileSearch,
    title: "费用录入机器人",
    desc: "智能识别应付应收账单，快速录入系统，减少人工录入错误",
    highlight: "降本增效"
  },
  {
    icon: Sparkles,
    title: "单证识别机器人",
    desc: "识别托书、报关单、装箱单等，按定制模版快速录入输出",
    highlight: "智能OCR"
  },
];

const AISection = () => {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-ai/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ai/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai/10 text-ai text-sm mb-6">
            <Brain className="w-4 h-4" />
            智能物流
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">AI解决方案</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            基于大模型的智能物流解决方案
            <br />
            <span className="text-lg">让AI成为您的数字员工，重塑业务效率</span>
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-ai/30 transition-all duration-500 hover:shadow-hover overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ai/10 text-ai text-xs font-medium">
                {solution.highlight}
              </div>

              <div className="w-14 h-14 rounded-xl bg-ai/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <solution.icon className="w-7 h-7 text-ai" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(45 93% 58% / 0.1) 0%, hsl(35 93% 50% / 0.05) 100%)"
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                想了解更多AI解决方案？
              </h3>
              <p className="text-muted-foreground max-w-xl">
                我们提供从需求分析到落地实施的全流程服务，帮助您快速构建智能物流体系
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-accent-foreground font-semibold rounded-full hover:shadow-glow transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              预约演示
            </a>
          </div>

          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-ai/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
