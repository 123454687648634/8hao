

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface TutorialArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  views: string;
}

interface LanguageArticle {
  id: string;
  title: string;
  meaning: string;
  description: string;
  imageUrl: string;
}

interface SeasonArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface FestivalArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tag: string;
  tagIcon: string;
  tagColor: string;
}

type TabType = 'tutorial' | 'language' | 'season' | 'festival';

const KnowledgeScreen: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('tutorial');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showError, setShowError] = useState(false);

  // 模拟数据
  const tutorialArticles: TutorialArticle[] = [
    {
      id: 'tutorial-1',
      title: '基础插花技巧入门',
      description: '学习插花的基本原理和技巧，让你的花艺作品更加专业美观。包括花材选择、色彩搭配、构图技巧等...',
      imageUrl: 'https://s.coze.cn/image/vPp3r-YHKy8/',
      date: '2024-01-15',
      views: '1.2k',
    },
    {
      id: 'tutorial-2',
      title: '鲜花保鲜全攻略',
      description: '掌握正确的鲜花养护方法，让你的鲜花保持更长时间的新鲜度。包括剪枝技巧、换水频率、温度控制等...',
      imageUrl: 'https://s.coze.cn/image/u9JPUfQh4ts/',
      date: '2024-01-12',
      views: '856',
    },
    {
      id: 'tutorial-3',
      title: '花艺色彩搭配指南',
      description: '了解色彩心理学在花艺中的应用，学会如何搭配出令人惊艳的花束作品...',
      imageUrl: 'https://s.coze.cn/image/Ks9TZ1zHFVY/',
      date: '2024-01-10',
      views: '643',
    },
  ];

  const languageArticles: LanguageArticle[] = [
    {
      id: 'language-1',
      title: '玫瑰花语',
      meaning: '爱情、热情、浪漫',
      description: '不同颜色的玫瑰有不同的寓意，红玫瑰代表热烈的爱情，粉玫瑰代表温馨的关怀...',
      imageUrl: 'https://s.coze.cn/image/stY-7dx1ZIM/',
    },
    {
      id: 'language-2',
      title: '百合花语',
      meaning: '纯洁、高雅、神圣',
      description: '百合象征着纯洁无瑕的爱情和高贵典雅的气质，是婚礼和重要场合的常用花材...',
      imageUrl: 'https://s.coze.cn/image/XXl1-MNADWE/',
    },
    {
      id: 'language-3',
      title: '康乃馨花语',
      meaning: '感恩、母爱、尊敬',
      description: '康乃馨是母亲节的代表花，象征着对母亲的深深感激和敬爱之情...',
      imageUrl: 'https://s.coze.cn/image/yOL-nsjodyQ/',
    },
    {
      id: 'language-4',
      title: '向日葵花语',
      meaning: '阳光、希望、忠诚',
      description: '向日葵象征着积极向上的生活态度和对美好未来的无限向往...',
      imageUrl: 'https://s.coze.cn/image/pA4vbghbw34/',
    },
  ];

  const seasonArticles: SeasonArticle[] = [
    {
      id: 'season-1',
      title: '春季花艺推荐',
      description: '春天是百花盛开的季节，推荐使用郁金香、水仙、风信子等春季花卉，营造清新自然的氛围...',
      imageUrl: 'https://s.coze.cn/image/BbEh1k50iqQ/',
      tags: ['郁金香', '水仙', '风信子'],
    },
    {
      id: 'season-2',
      title: '夏季花艺推荐',
      description: '夏天适合使用色彩鲜艳、生命力旺盛的花卉，如玫瑰、百合、向日葵等...',
      imageUrl: 'https://s.coze.cn/image/BgkqwGMvuik/',
      tags: ['玫瑰', '百合', '向日葵'],
    },
    {
      id: 'season-3',
      title: '秋季花艺推荐',
      description: '秋天适合使用温暖色调的花卉，如菊花、大丽花、桂花等，营造温馨舒适的氛围...',
      imageUrl: 'https://s.coze.cn/image/0p3rdTyimvY/',
      tags: ['菊花', '大丽花', '桂花'],
    },
    {
      id: 'season-4',
      title: '冬季花艺推荐',
      description: '冬天适合使用耐寒花卉，如一品红、水仙、梅花等，为寒冷的季节增添一抹亮色...',
      imageUrl: 'https://s.coze.cn/image/rudq6SkNdzM/',
      tags: ['一品红', '水仙', '梅花'],
    },
  ];

  const festivalArticles: FestivalArticle[] = [
    {
      id: 'festival-1',
      title: '情人节花艺指南',
      description: '情人节是表达爱意的最佳时机，推荐红玫瑰、粉玫瑰、郁金香等浪漫花材...',
      imageUrl: 'https://s.coze.cn/image/tJRB1ScacIE/',
      date: '2024-02-14',
      tag: '浪漫推荐',
      tagIcon: 'heart',
      tagColor: '#FF8A80',
    },
    {
      id: 'festival-2',
      title: '母亲节花艺指南',
      description: '母亲节是感谢母爱的特殊日子，推荐康乃馨、百合、兰花等温馨花材...',
      imageUrl: 'https://s.coze.cn/image/1ZaAF-ZI1tk/',
      date: '2024-05-12',
      tag: '感恩推荐',
      tagIcon: 'heart',
      tagColor: '#E8B4B8',
    },
    {
      id: 'festival-3',
      title: '圣诞节花艺指南',
      description: '圣诞节是温馨欢乐的节日，推荐一品红、圣诞树、槲寄生等节日花材...',
      imageUrl: 'https://s.coze.cn/image/mbJ25wj8J5I/',
      date: '2024-12-25',
      tag: '节日推荐',
      tagIcon: 'gift',
      tagColor: '#F4D03F',
    },
    {
      id: 'festival-4',
      title: '春节花艺指南',
      description: '春节是中国最重要的传统节日，推荐桃花、梅花、金桔等吉祥花材...',
      imageUrl: 'https://s.coze.cn/image/iBSystiZHHc/',
      date: '2024-02-10',
      tag: '吉祥推荐',
      tagIcon: 'fireworks',
      tagColor: '#FF8A80',
    },
  ];

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleTabPress = useCallback((tab: TabType) => {
    setIsLoading(true);
    setShowError(false);
    
    // 模拟加载延迟
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 300);
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setShowError(false);
    
    // 模拟刷新延迟
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const handleRetry = useCallback(() => {
    setIsLoading(true);
    setShowError(false);
    
    // 模拟重试加载
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleArticlePress = useCallback((articleId: string) => {
    Alert.alert('文章详情', `点击了文章: ${articleId}`);
  }, []);

  const getTagColor = useCallback((tag: string) => {
    const colorMap: { [key: string]: string } = {
      '郁金香': '#E8B4B8',
      '水仙': '#F4D03F',
      '风信子': '#A8E6CF',
      '玫瑰': '#E8B4B8',
      '百合': '#F4D03F',
      '向日葵': '#FF8A80',
      '菊花': '#E8B4B8',
      '大丽花': '#F4D03F',
      '桂花': '#A8E6CF',
      '一品红': '#E8B4B8',
      '梅花': '#FF8A80',
    };
    return colorMap[tag] || '#E8B4B8';
  }, []);

  const renderTutorialArticle = useCallback((article: TutorialArticle) => (
    <TouchableOpacity
      key={article.id}
      style={styles.tutorialCard}
      onPress={() => handleArticlePress(article.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: article.imageUrl }} style={styles.tutorialImage} />
      <View style={styles.tutorialContent}>
        <Text style={styles.tutorialTitle}>{article.title}</Text>
        <Text style={styles.tutorialDescription}>{article.description}</Text>
        <View style={styles.tutorialFooter}>
          <Text style={styles.tutorialDate}>{article.date}</Text>
          <View style={styles.tutorialViews}>
            <FontAwesome6 name="eye" size={12} color="#A0AEC0" />
            <Text style={styles.tutorialViewsText}>{article.views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ), [handleArticlePress]);

  const renderLanguageArticle = useCallback((article: LanguageArticle) => (
    <TouchableOpacity
      key={article.id}
      style={styles.languageCard}
      onPress={() => handleArticlePress(article.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: article.imageUrl }} style={styles.languageImage} />
      <View style={styles.languageContent}>
        <Text style={styles.languageTitle}>{article.title}</Text>
        <Text style={styles.languageMeaning}>{article.meaning}</Text>
        <Text style={styles.languageDescription}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  ), [handleArticlePress]);

  const renderSeasonArticle = useCallback((article: SeasonArticle) => (
    <TouchableOpacity
      key={article.id}
      style={styles.seasonCard}
      onPress={() => handleArticlePress(article.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: article.imageUrl }} style={styles.seasonImage} />
      <View style={styles.seasonContent}>
        <Text style={styles.seasonTitle}>{article.title}</Text>
        <Text style={styles.seasonDescription}>{article.description}</Text>
        <View style={styles.seasonTags}>
          {article.tags.map((tag, index) => (
            <View
              key={index}
              style={[styles.seasonTag, { backgroundColor: `${getTagColor(tag)}1A` }]}
            >
              <Text style={[styles.seasonTagText, { color: getTagColor(tag) }]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  ), [handleArticlePress, getTagColor]);

  const renderFestivalArticle = useCallback((article: FestivalArticle) => (
    <TouchableOpacity
      key={article.id}
      style={styles.festivalCard}
      onPress={() => handleArticlePress(article.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: article.imageUrl }} style={styles.festivalImage} />
      <View style={styles.festivalContent}>
        <Text style={styles.festivalTitle}>{article.title}</Text>
        <Text style={styles.festivalDescription}>{article.description}</Text>
        <View style={styles.festivalFooter}>
          <Text style={styles.festivalDate}>{article.date}</Text>
          <View style={styles.festivalTag}>
            <FontAwesome6 name={article.tagIcon} size={12} color={article.tagColor} />
            <Text style={[styles.festivalTagText, { color: article.tagColor }]}>
              {article.tag}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ), [handleArticlePress]);

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingSpinner} />
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      );
    }

    if (showError) {
      return (
        <View style={styles.errorContainer}>
          <FontAwesome6 name="triangle-exclamation" size={48} color="#A0AEC0" />
          <Text style={styles.errorText}>加载失败，请重试</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryButtonText}>重试</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (activeTab) {
      case 'tutorial':
        return (
          <View style={styles.contentContainer}>
            {tutorialArticles.map(renderTutorialArticle)}
          </View>
        );
      case 'language':
        return (
          <View style={styles.contentContainer}>
            {languageArticles.map(renderLanguageArticle)}
          </View>
        );
      case 'season':
        return (
          <View style={styles.contentContainer}>
            {seasonArticles.map(renderSeasonArticle)}
          </View>
        );
      case 'festival':
        return (
          <View style={styles.contentContainer}>
            {festivalArticles.map(renderFestivalArticle)}
          </View>
        );
      default:
        return null;
    }
  }, [
    isLoading,
    showError,
    activeTab,
    tutorialArticles,
    languageArticles,
    seasonArticles,
    festivalArticles,
    renderTutorialArticle,
    renderLanguageArticle,
    renderSeasonArticle,
    renderFestivalArticle,
    handleRetry,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>花艺知识</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 分类导航 */}
      <View style={styles.categoryNav}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryNavContent}
        >
          <TouchableOpacity
            style={[
              styles.categoryTab,
              activeTab === 'tutorial' ? styles.categoryTabActive : styles.categoryTabInactive,
            ]}
            onPress={() => handleTabPress('tutorial')}
          >
            <Text
              style={[
                styles.categoryTabText,
                activeTab === 'tutorial' ? styles.categoryTabTextActive : styles.categoryTabTextInactive,
              ]}
            >
              图文教程
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryTab,
              activeTab === 'language' ? styles.categoryTabActive : styles.categoryTabInactive,
            ]}
            onPress={() => handleTabPress('language')}
          >
            <Text
              style={[
                styles.categoryTabText,
                activeTab === 'language' ? styles.categoryTabTextActive : styles.categoryTabTextInactive,
              ]}
            >
              花语百科
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryTab,
              activeTab === 'season' ? styles.categoryTabActive : styles.categoryTabInactive,
            ]}
            onPress={() => handleTabPress('season')}
          >
            <Text
              style={[
                styles.categoryTabText,
                activeTab === 'season' ? styles.categoryTabTextActive : styles.categoryTabTextInactive,
              ]}
            >
              季节推荐
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryTab,
              activeTab === 'festival' ? styles.categoryTabActive : styles.categoryTabInactive,
            ]}
            onPress={() => handleTabPress('festival')}
          >
            <Text
              style={[
                styles.categoryTabText,
                activeTab === 'festival' ? styles.categoryTabTextActive : styles.categoryTabTextInactive,
              ]}
            >
              节日指南
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* 主要内容区域 */}
      <ScrollView
        style={styles.mainContent}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default KnowledgeScreen;

